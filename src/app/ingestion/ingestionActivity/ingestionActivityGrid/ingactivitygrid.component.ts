import { Component, OnInit } from '@angular/core';
import 'ag-grid-angular';
import { GridOptions } from 'ag-grid';



import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ing-activity-grid',
    providers: [],
    templateUrl: './ingactivitygrid.component.html',
    styleUrls: ['ingactivitygrid.component.css']
})


export class IngActivityGridComponent implements OnInit {

  private columnDefs;
  private defaultColDef;

  constructor(protected httpClient: HttpClient, ) {
    this.columnDefs = [
      {headerName: 'Ingestion Profile', field: 'clusterName', width: 250},
      {headerName: 'Source', field: 'version', width: 250 },
      {headerName: 'Target', field: 'url', width: 250},
      {headerName: 'Created By', field: 'createdBy', width: 250 },
      {headerName: 'Last Modified', field: 'lastModified' , width: 250}      
      ];
    this.rowSelection = 'single';
    
  }

  public gridOptions: GridOptions;
  private gridApi;
  private gridColumnApi;
  private rowSelection;
  rowData: any;
  private apiRoot = 'http://74.93.88.27:8081/hitmvc/rest/service/job/getjobs' ;
  private readonly url = 'http://74.93.88.27:8081/hitmvc/rest/service/job/getjobs';


  ngOnInit(): void {
    console.log('GET');
    this.rowData = [
        { clusterName: 'Name1', version: ' SQL', url:'url1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'Name1', version: 'Oracle', url:'url1',master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'Name1', version: 'Sysbase', url:'url1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'Name1', version: 'V1', url:'url1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'Name1', version: 'V1', url:'url1',master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'Name1', version: 'V1',url:'url1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'Name1', version: 'V1', url:'url1',master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'Name1', version: 'V1', url:'url1',master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'Name1', version: 'V1', url:'url1',master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster4', version: 'V1',url:'url1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster5', version: 'V1',url:'url1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster6', version: 'V1', url:'url1',master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
    ];

    this.defaultColDef = { editable: true };

const headers = new HttpHeaders();
headers.set('Content-Type', 'application/json; charset=utf-8');
  this.httpClient.get(this.url, {headers: headers}).subscribe(
    (data) => {
      console.log(data);
    },
    (err: HttpErrorResponse) => {
      console.log(' Error ' + err);
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    }
  );

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onSelectionChanged() {
    const selectedRows =  this.gridApi.getSelectedRows();
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
      selectedRowclusterName += value.clusterName;
      selectedRowVersion += value.version;
      selectedRowMaster += value.master;
      selectedRowCreatedBy += value.createdBy;
    });
    document.querySelector('#clusterName').innerHTML = selectedRowclusterName;
    document.querySelector('#version').innerHTML = selectedRowVersion;
    document.querySelector('#master').innerHTML = selectedRowMaster;
    document.querySelector('#createdBy').innerHTML = selectedRowCreatedBy;
  }
}

