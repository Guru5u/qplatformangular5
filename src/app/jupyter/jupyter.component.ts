import { Component, OnInit, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-jupyter',
  templateUrl: './jupyter.component.html',
  styleUrls: ['./jupyter.component.css']
})
export class JupyterComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  ngOnDestroy() {
    console.log(' In ngOnDestroy'); 
  }
  ngAfterViewInit() {
    console.log(' In ngAfterViewInit');
   }
  ngAfterContentInit() {
    console.log(' In ngAfterContentInit');
    
  }
  constructor() { 

    console.log(' In constructor');
  }

  ngOnInit() {

    console.log(' In ngOnInit');
  }
}
