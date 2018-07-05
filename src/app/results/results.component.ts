import {Component, OnDestroy, OnInit} from "@angular/core";
import { Http,Response } from "@angular/http";

@Component({
    selector: 'quadratics-results',
    templateUrl: 'results.component.html',
    styleUrls:['results.component.scss']
})
export class ResultsComponent {

    public productName: string;
    public result: string;

    constructor(private http:Http){}

    onClicked(){
           this.http.get("http://localhost:3640/api/values?name="+this.productName).subscribe((response: Response) => {
               let body = response.json() 
               console.log(response);
               this.result = body.Data;
               
           })
    }
}