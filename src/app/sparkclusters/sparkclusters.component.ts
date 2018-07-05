import {Component, OnDestroy, OnInit} from '@angular/core';
//import { Http, Response } from '@angular/http';
import { NgxSpinnerService } from 'ngx-spinner';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'app-sparkcluster-page',
    templateUrl: 'sparkclusters.component.html',
    styleUrls: ['sparkclusters.component.scss']
})
export class SparkClusterComponent {

    public productName: string;
    public result: string;
    closeResult: string;
    showSpinner = false;    
    showStatus = false;
    showSpinner4Add = false;
    showStatus4Add = false;
    showSpinner4Edit = false;
    showStatus4Edit = false;
    showdeleteStatus = false;

    // constructor(private http:Http){}
    constructor( private httpClient: HttpClient , private spinner: NgxSpinnerService) { }

    testConnection() {

    console.log(' In test connection');
      /** spinner starts on init */
      this.showSpinner = true;

      setTimeout(() => {
          /** spinner ends after 3 seconds */
          this.showSpinner = false;
          this.showStatus = true;
      }, 3000);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.showStatus = false;
    }, 5000);

  }

  testConnection4Add() {

    console.log(' In test connection');
    document.querySelector('#add.clusterName').innerHTML = " this is the value";
      /** spinner starts on init */
      this.showSpinner4Add = true;

      setTimeout(() => {
          /** spinner ends after 3 seconds */
          this.showSpinner4Add = false;
          this.showStatus4Add = true;
      }, 3000);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.showStatus4Add = false;
    }, 5000);
  }

  testConnection4Edit() {

    console.log(' In test connection');
      /** spinner starts on init */
      this.showSpinner4Edit = true;

      setTimeout(() => {
          /** spinner ends after 3 seconds */
          this.showSpinner4Edit = false;
          this.showStatus4Edit = true;
      }, 3000);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.showStatus4Edit = false;
    }, 5000);

  }

  deleteSparkCluster() {
    setTimeout(() => {
        this.showdeleteStatus = true;
    }, 3000);
    setTimeout(() => {
       this.showdeleteStatus = false;
  }, 5000);

  }
}
