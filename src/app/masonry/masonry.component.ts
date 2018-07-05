import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from '../jobs';
import { DataService } from '../data.service';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-component',
    templateUrl: './masonry.component.html',
  })
  export class MyComponent implements OnInit{

    masonryTileArray = ['tile0', 'tile1', 'tile2', 'tile3', 'tile4', 'tile5', 'tile6', 'tile7', 'tile8'];
    constructor(private router: Router , private dataService: DataService) { }

    people: Jobs[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;
  
  
    ngOnInit(){

      console.log(' In masonry ng Init');
      // this.dataService
      //   .getAll()
      //   .subscribe(
      //      /* happy path */ p => this.people = p,
      //      /* error path */ e => this.errorMessage = e,
      //      /* onCompleted */ () => this.isLoading = false);
    }

    spark() {
      this.router.navigate(['./sparkcluster']);
    }

    hadoop() {
      this.router.navigate(['./hadoopcluster']);
    }

    s3() {
      this.router.navigate(['./s3cluster']);
    }

    fileserver() {
      this.router.navigate(['./fileserver']);
    }

    ingestion() {
      this.router.navigate(['./ingestionOverview']);
    }

    rdbms() {
      this.router.navigate(['./rdbms']);
    }
  }
