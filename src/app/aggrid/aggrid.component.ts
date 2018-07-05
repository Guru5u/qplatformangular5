import { Component, OnInit } from '@angular/core';
import 'ag-grid-angular';
import { GridOptions } from 'ag-grid';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ag-grid',
    providers: [],
    templateUrl: './aggrid.component.html',
    styleUrls: ['aggrid.component.css']
})


export class AgGridComponent implements OnInit {

  private columnDefs;

  constructor(protected httpClient: HttpClient, ) {
    this.columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price'}
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
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
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
    let selectedRowsString = '';
    let selectedRowsString1 = '';
    selectedRows.forEach(function(value, index) {
      if (index !== 0) {
        selectedRowsString += ', ';
      }
      selectedRowsString += value.make;
      selectedRowsString1 += value.model;
    });
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;
    document.querySelector('#selectedRows1').innerHTML = selectedRowsString1;
  }
}

