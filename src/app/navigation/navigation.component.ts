import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnInit, OnChanges, OnDestroy {

  @Input() animateClass: string;
  @Input() showCompareClient: boolean;
  public resultsSelected = false;
  public traningDataSelected = true;
  public ingestionSelected = false;
  public clusterSelected = false;
  public sparkclusterSelected = false;
  public portfolioOrClientLink = "";
  public defaultCustomBoardLink = "";
  public customBoardLink = "";

  public timeframeBoardLink = "";
  public showNavLinks = true;
  public showDataRefreshedModal = false;
  public showVideoModal = false;

  public winsAndBacklogMonth = "";
  public winsAndBacklogYear = "";
  public impersonatingClass: string = '';
  public impersonatedUser: string = "";
  public isImpersonating: boolean = false;
  public isHelpDropdown: boolean = false;
  public isProfileClicked: boolean = false;
  public profilePictureSource: string = "";
  public isAppFinderDropdown: boolean = false;
  public videoChecked: boolean = false;
  public showPeriodReference: boolean = false;
  private boardId: string = "";
  private boardTimeFrameId: string = "";


  public menuItemsArray: any[] = [
    {'title':'Home',"link":"#"},
    {'title':'Manage','link':'#',
    'subItems':[
                {'title':'Hadoop Clusters','link':'#'},
                {'title':'Spark Cluster','link':'#'},
                {'title':'S3 Clusters','link':'#'},
                {'title':'File Servers','link':'#'},
                {'title':'RDBMS','link':'#'},
               ]
    },
    {'title':'Ingestion','link':'#',
     'subItems':[
                  {'title':'Ingestion Activity','link':'#'},
                  {'title':'Ingestion Overview','link':'#'},
                 ]
    },
    {'title':'Jobs','link':'#'},
    {'title':'Admin','link':'#',
     'subItems':[
                  {'title':'user','link':'#'},
                  {'title':'Settings','link':'#'},
                 ]
    },
    {'title':'Jupyter','link':'#'},
    {'title':'RunModel','link':'#'},
];

private config = {
  // animation: 'boring',
  offset: {
  top: 40
  },
  closeOnCLick: true
  };

  constructor(private activatedRoute: ActivatedRoute , private router: Router) {
  }

  ngOnChanges() {
  }

  ngOnDestroy(): void {

  }

  ngOnInit() {
    this.activatedRoute.url.subscribe((url: Array<UrlSegment>) => {
      if (url && url.length <= 0) {
        this.traningDataSelected = true;
        this.resultsSelected = false;
        this.ingestionSelected = false;
        this.clusterSelected = false;
        this.sparkclusterSelected = false;
      }
    });
  }


  public toggleHelpOptions() {
    this.isHelpDropdown = !this.isHelpDropdown;
  }

  public toggleAppFinderOptions() {
    this.isAppFinderDropdown = !this.isAppFinderDropdown;
  }

public onMenuClose() {
 console.log('menu closed');
}
public onMenuOpen() {
 console.log('menu Opened');
}
public onItemSelect(item: any) {
 console.log(item.title);
 if (item.title === 'Home') {
  this.router.navigate(['./traindata']);
 }
 if (item.title === 'Spark Cluster') {

  this.router.navigate(['./sparkcluster']);
  setTimeout(() => {
    /** spinner ends after 3 seconds */
    this.onMenuClose();
}, 3000);

 }
 if (item.title === 'Hadoop Clusters') {
  this.router.navigate(['./hadoopcluster']);
  this.onMenuClose();
 }

 if (item.title === 'S3 Clusters') {
  this.router.navigate(['./s3cluster']);
  this.onMenuClose();
 }

 if (item.title === 'File Servers') {
  this.router.navigate(['./fileserver']);
  this.onMenuClose();
 }

 if (item.title === 'RDBMS') {
  this.router.navigate(['./rdbms']);
  this.onMenuClose();
 }

 if (item.title === 'Ingestion Overview') {
  this.router.navigate(['./ingestionOverview']);
  this.onMenuClose();
 }

 if (item.title === 'Ingestion Activity') {
  this.router.navigate(['./ingActivity']);
  this.onMenuClose();
 }
 if (item.title === 'Jupyter') {
  this.router.navigate(['./jupyter']);
  this.onMenuClose();
 } 
 if (item.title === 'RunModel') {
  this.router.navigate(['./runmodel']);
  this.onMenuClose();
 } 
 
}
}
