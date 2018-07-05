import { Component, OnInit, Input } from '@angular/core';

import { FlaskService } from '../flask.service';

import {
  Iris,
  ProbabilityPrediction,
  SVCParameters,
  SVCResult
} from "../types";

@Component({
  selector: 'app-runmodel',
  templateUrl: './runmodel.component.html',
  styleUrls: ['./runmodel.component.css']
})
export class RunmodelComponent implements OnInit {


  resValue = 'initial value';
  reqValue = '';

  @Input() test: string;
    public svcParameters: SVCParameters = new SVCParameters();
    public svcResult: SVCResult;
    public iris: Iris = new Iris();
    public probabilityPredictions: ProbabilityPrediction[];

    constructor(private flaskService: FlaskService) {
    }

  ngOnInit() {
   }

   onChange(event: any, input: any) {
    let files = [].slice.call(event.target.files);

    input.value = files.map(f => f.name).join(', ');
  }

   public predictIris( requestVal: string ) {
    //this.resValue = '';
    console.log(' request  '+ requestVal);
    this.flaskService.predictIris(JSON.parse(requestVal)).subscribe((probabilityPredictions) => {
     console.log(' this.probabilityPredictions '+ JSON.stringify(probabilityPredictions));
      //this.probabilityPredictions = probabilityPredictions;
        this.resValue = JSON.stringify(probabilityPredictions);
        
    });   
}

public clear() {
  this.resValue = '';
  this.reqValue = '';
}

}
