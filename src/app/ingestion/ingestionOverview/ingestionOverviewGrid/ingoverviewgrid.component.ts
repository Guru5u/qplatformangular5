import { Component, OnInit } from '@angular/core';
import 'ag-grid-angular';
import { GridOptions } from 'ag-grid';
import {ColDef, ColumnApi, GridApi} from 'ag-grid';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { JobModel } from '../../../model/jobs/jobmodel';
import { JobService } from '../../../service/job/JobService';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ing-overview-grid',
    providers: [],
    templateUrl: './ingoverviewgrid.component.html',
    styleUrls: ['ingoverviewgrid.component.css']
})


export class IngOverviewGridComponent implements OnInit {

  // row data and column definitions
  private rowData: JobModel[];
  private columnDefs: ColDef[];


    // gridApi and columnApi
    private api: GridApi;
    private columnApi: ColumnApi;

    // inject the athleteService
    constructor(private jobService: JobService) {
        this.columnDefs = this.createColumnDefs();
    }

  // on init, subscribe to the athelete data
  ngOnInit() {
    this.jobService.getJobDetails().subscribe(
        jobs => {
            this.rowData = jobs
        },
        error => {
            console.log(error);
        }
    )
  }

// one grid initialisation, grap the APIs and auto resize the columns to fit the available space
onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
}  

  // create some simple column definitions
  private createColumnDefs() {
    return [
        {field: 'id' },
        {field: 'jobName'},
        {field: 'createdBy'},
        {field: 'createdDate'},
        {field: 'lastModifiedDate'},
        {field: 'AppName', valueGetter: (params) => params.data.jobApp.name},
        {field: 'description', valueGetter: (params) => params.data.jobApp.description},
        {field: 'ProfileId', width: 100, valueGetter: (params) => params.data.jobApp.profileCluster.id}        
    ]
}

onSelectionChanged() {
  const selectedRows =  this.api.getSelectedRows();
  let selectedRowclusterName = '';
  let selectedRowVersion = '';
  let selectedRowMaster = '';
  let selectedRowCreatedBy = '';
  selectedRows.forEach(function(value, index) {
    if (index !== 0) {
      selectedRowclusterName += ', ';
      selectedRowVersion += ', ';
      selectedRowMaster += ', ';
      selectedRowCreatedBy += ', ';
    }
    console.log( value.jobApp.profileCluster.id);
    selectedRowclusterName += value.jobApp.profileCluster.id;
    selectedRowVersion += value.version;
    selectedRowMaster += value.master;
    selectedRowCreatedBy += value.createdDate;
  });
  document.querySelector('#clusterName').innerHTML = selectedRowclusterName;
  document.querySelector('#version').innerHTML = selectedRowVersion;
  document.querySelector('#master').innerHTML = selectedRowMaster;
  document.querySelector('#createdBy').innerHTML = selectedRowCreatedBy;
}
}

