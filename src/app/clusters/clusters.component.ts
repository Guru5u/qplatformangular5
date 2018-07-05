import {Component, OnDestroy, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
    selector: 'app-cluster-page',
    templateUrl: 'clusters.component.html',
    styleUrls: ['clusters.component.scss']
})
export class ClusterComponent {

    public productName: string;
    public result: string;
    closeResult: string;
    showSpinner = false;
    showStatus = false;

    // constructor(private http:Http){}
    constructor( private http: Http , private spinner: NgxSpinnerService) { }

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
}
