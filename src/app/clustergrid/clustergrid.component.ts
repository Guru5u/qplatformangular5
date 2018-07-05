import { Component } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';
import data from './clustergrid.data';
import icons from 'glyphicons';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cluster-grid',
    providers: [],
    templateUrl: './clustergrid.component.html',
    styleUrls: ['./clustergrid.component.scss']
})
export class ClusterGridComponent {

    itemResource = new DataTableResource(data);
    items = [];
    itemCount = 0;

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }
}
