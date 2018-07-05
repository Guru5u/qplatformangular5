import { Component, OnInit } from '@angular/core';
import 'ag-grid-angular';
import { GridOptions } from 'ag-grid';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'spark-cluster-grid',
    providers: [],
    templateUrl: './sparkgrid.component.html',
    styleUrls: ['sparkgrid.component.css']
})


export class SparkGridComponent implements OnInit {

  private columnDefs;
  private defaultColDef;
  private checkboxSelection;

  constructor(protected httpClient: HttpClient, ) {
    this.columnDefs = [
      {headerName: 'Spark Cluster Name', field: 'clusterName', width: 250, checkboxSelection: true },
      {headerName: 'Spark Version', field: 'version', width: 150, editable: true },
      {headerName: 'Spark Master', field: 'master', width: 250, editable: true},
      {headerName: 'Connection Status', field: 'connStatus', width: 250 },
      {headerName: 'Created By', field: 'createdBy', width: 100 },
      {headerName: 'Last Modified', field: 'lastModified' , width: 250}      
      ];
    this.rowSelection = 'single';
    //this.defaultColDef = { editable: true };    
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
        { clusterName: 'cluster1', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster2', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster3', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster4', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster5', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster6', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster1', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster2', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster3', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster4', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster5', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
        { clusterName: 'cluster6', version: 'V1', master: 'master1', connStatus: 'verified', createdBy: 'admin', lastModified: '4/2/28' },
    ];

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
    if(this.display2Test()){
    document.querySelector('#clusterName').innerHTML = selectedRowclusterName;
    document.querySelector('#version').innerHTML = selectedRowVersion;
    document.querySelector('#master').innerHTML = selectedRowMaster;
    document.querySelector('#createdBy').innerHTML = selectedRowCreatedBy;

    }
    
  }


///////////////////////////////////

onAddRow() {
  var newItem = createNewRowData();
  var res = this.gridApi.updateRowData({ add: [newItem] });
  printResult(res);
}

onRemoveSelected() {
  var selectedData = this.gridApi.getSelectedRows();
  alert(' Do you want to delete this record ?')
  var res = this.gridApi.updateRowData({ remove: selectedData });

  printResult(res);
}

rowsSelected() {
  return this.gridApi && this.gridApi.getSelectedRows().length > 0;
}

display2Test() {
  return this.gridApi && this.gridApi.getSelectedRows().length == 1;
}
//////////////////////////////////

}

var newCount = 1;

function createNewRowData() {
  var newData = {
    make: "Toyota " + newCount,
    model: "Celica " + newCount,
    price: 35000 + newCount * 17,
    zombies: "Headless",
    style: "Little",
    clothes: "Airbag"
  };
  newCount++;
  return newData;
}

function printResult(res) {
  console.log("---------------------------------------");
  if (res.add) {
    res.add.forEach(function(rowNode) {
      console.log("Added Row Node", rowNode);
    });
  }
  if (res.remove) {
    res.remove.forEach(function(rowNode) {
      console.log("Removed Row Node", rowNode);
    });
  }
  if (res.update) {
    res.update.forEach(function(rowNode) {
      console.log("Updated Row Node", rowNode);
    });
  }
}

