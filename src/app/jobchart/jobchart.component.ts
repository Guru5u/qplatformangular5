import { Component, Input, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'job-chart',
    templateUrl: './jobchart.component.html',
  })

export class JobChartComponent{

  dataSource: Object;

    demoId: string;
    constructor() {
      this.demoId = "ex1";
      this.dataSource = {
        chart: {
          "caption": "Quarterly Expenditure",
          "xAxisname": "Quarter",
          "yAxisName": "Expenditure (In USD)",
          "numberPrefix": "$",
          "baseFont": "Roboto",
          "baseFontSize": "14",
          "labelFontSize": "15",
          "captionFontSize": "20",
          "subCaptionFontSize": "16",
          "paletteColors": "#2c7fb2,#6cc184,#fed466",
          "bgColor": "#ffffff",
          "legendShadow": "0",
          "valueFontColor": "#ffffff",
          "showXAxisLine": "1",
          "xAxisLineColor": "#999999",
          "divlineColor": "#999999",
          "divLineIsDashed": "1",
          "showAlternateHGridColor": "0",
          "subcaptionFontBold": "0",
          "subcaptionFontSize": "14",
          "showHoverEffect": "1"
        },
        "categories": [{
          "category": [{
            "label": "Q1"
          }, {
            "label": "Q2"
          }, {
            "label": "Q3"
          }, {
            "label": "Q4"
          }]
        }],
        "dataset": [{
          "seriesname": "Marketing",
          "data": [{
            "value": "121000"
          }, {
            "value": "135000"
          }, {
            "value": "123500"
          }, {
            "value": "145000"
          }]
        }, {
          "seriesname": "Management",
          "data": [{
            "value": "190000"
          }, {
            "value": "195000"
          }, {
            "value": "187000"
          }, {
            "value": "190000"
          }]
        }, {
          "seriesname": "Operations",
          "data": [{
            "value": "225000"
          }, {
            "value": "260000"
          }, {
            "value": "245000"
          }, {
            "value": "250000"
          }]
        }]
      };
    }



}