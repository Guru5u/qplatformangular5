import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BootstrapComponent} from './bootstrap.component';
import {RouterModule, Routes} from '@angular/router';
import { TrainDataComponent } from './traindata/traindata.component';
import { GridComponent } from './grid/grid.component';
import { DataTableModule } from 'angular5-data-table';
import { ResultsComponent } from './results/results.component';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { MyComponent } from './masonry/masonry.component';
import { MasonryModule } from 'angular2-masonry';
import { TileComponent } from './tile/tile.component';
import { CpuTile } from './widget/cpu/cpu.component';
import { Cpu1Tile } from './widget/cpu1/cpu1.component';
import { Cpu2Tile } from './widget/cpu2/cpu2.component';
import { Country } from './widget/cpu2/cpu2.countryComponent';
import { Cpu3Tile } from './widget/cpu3/cpu3.component';
import { Cpu4Tile } from './widget/cpu4/cpu4.component';
import { Cpu5Tile } from './widget/hadoopwidget/cpu5.component';
import { ClusterComponent } from './clusters/clusters.component';
import { ClusterGridComponent } from './clustergrid/clustergrid.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SparkClusterComponent } from './sparkclusters/sparkclusters.component';
import { Cpu6Tile } from './widget/sparkwidget/cpu6.component';
import { Cpu7Tile } from './widget/s3widget/cpu7.component';

// ag-grid
import { AgGridModule } from 'ag-grid-angular/main';
import { AgGridComponent } from './aggrid/aggrid.component';

import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { SparkGridComponent } from './sparkclusters/sparkGrid/sparkgrid.component';
import { HadoopGridComponent } from './hadoopclusters/hadoopGrid/hadoopgrid.component';
import { HadoopClusterComponent } from './hadoopclusters/hadoopclusters.component';
import { S3GridComponent } from './s3lusters/s3Grid/s3grid.component';
import { S3ClusterComponent } from './s3lusters/s3clusters.component';
import { RdbmsGridComponent } from './rdbms/rdbmsGrid/rdbmsgrid.component';
import { RdbmsComponent } from './rdbms/rdbms.component';
import { FileServerComponent } from './fileserver/fileserver.component';
import { FileServerGridComponent } from './fileserver/fileserverGrid/fileservergrid.component';
import { IngOverViewComponent } from './ingestion/ingestionOverview/ingoverview.component';
import { IngOverviewGridComponent } from './ingestion/ingestionOverview/ingestionOverviewGrid/ingoverviewgrid.component';
import { IngActivityComponent } from './ingestion/ingestionActivity/ingactivity.component';
import { IngActivityGridComponent } from './ingestion/ingestionActivity/ingestionActivityGrid/ingactivitygrid.component';
import { DataService } from './data.service';
import { JobService } from './service/job/JobService';


// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { JobChartComponent } from './jobchart/jobchart.component';
import { JupyterComponent } from './jupyter/jupyter.component';
import { RunmodelComponent } from './runmodel/runmodel.component';
import { FlaskService } from './flask.service';

const routes: Routes = [
  {path: '', component: TrainDataComponent},
  {path: 'traindata', component: TrainDataComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'ingestionOverview', component: IngOverViewComponent},
  {path: 'cluster', component: ClusterComponent},
  {path: 'sparkcluster', component: SparkClusterComponent},
  {path: 'hadoopcluster', component: HadoopClusterComponent},
  {path: 's3cluster', component: S3ClusterComponent},
  {path: 'rdbms', component: RdbmsComponent},
  {path: 'fileserver', component: FileServerComponent},  
  {path: 'ingActivity', component: IngActivityComponent},
  {path: 'jupyter', component: JupyterComponent},
  {path: 'runmodel', component: RunmodelComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BootstrapComponent,
    TrainDataComponent,
    ResultsComponent,
    ClusterComponent,
    GridComponent,
    ClusterGridComponent,
    MyComponent,
    TileComponent,
    CpuTile,
    Cpu1Tile,
    Cpu2Tile,
    Cpu3Tile,
    Cpu4Tile,
    Cpu5Tile,
    Cpu6Tile,
    Cpu7Tile,
    DialogComponent,
    SparkClusterComponent,
    SparkGridComponent,
    S3ClusterComponent,
    S3GridComponent,
    HadoopGridComponent,
    HadoopClusterComponent,
    RdbmsGridComponent,
    RdbmsComponent,
    FileServerGridComponent,
    FileServerComponent,
    AgGridComponent,
    IngOverviewGridComponent,
    IngOverViewComponent,
    IngActivityGridComponent,
    IngActivityComponent,
    JobChartComponent,
    JupyterComponent,
    RunmodelComponent,   
  ],
  imports: [
    FormsModule,
    DataTableModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MasonryModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AgGridModule.withComponents([]),
    SlideMenuModule,
    FusionChartsModule.forRoot(FusionCharts, Charts),
   ],
   providers: [DataService , JobService, FlaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
