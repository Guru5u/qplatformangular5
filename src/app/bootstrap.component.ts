import {Component, Input, OnChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'bootstrap-component',
    templateUrl: './bootstrap.component.html'
})
export class BootstrapComponent implements OnChanges {
    @Input() public routeTo: string;

    constructor(private router: Router) {
    }

    ngOnChanges() {
        if (this.routeTo) {
            this.router.navigate([this.routeTo]);
        }
    }
}
