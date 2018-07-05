
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Country } from './cpu2.countryComponent';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cpu2-tile',
    templateUrl: './cpu2.component.html',
    styleUrls: ['./cpu2.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class Cpu2Tile {
  msg = '';
  nCnt = 0;
  selectedCountry: Country = new Country(2, 'Server2');
  countries = [
     new Country(1, 'Server1' ),
     new Country(2, 'Server2' ),
     new Country(3, 'Server3' ),
     new Country(4, 'Server4')
  ];
  clickMe() {
      console.log(' In click me ');
      this.nCnt = this.nCnt + 1;
      this.msg = 'Clicked: ' + this.nCnt;
  }



  onSelect(countryId) {

    this.selectedCountry = null;
    for (let i = 0; i < this.countries.length; i++)
    // tslint:disable-next-line:one-line
    {
      console.log(' countries[i].id  ' + this.countries[i].id + '====> ' + countryId);
      // tslint:disable-next-line:triple-equals
      if (this.countries[i].id == countryId) {
        console.log( ' this.countries[i] ' + this.countries[i].name);
        this.selectedCountry = this.countries[i];
      }
    }
 }
}

