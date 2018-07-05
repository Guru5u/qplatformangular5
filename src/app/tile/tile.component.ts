import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'main-tile',
    providers: [],
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent {
    @Input() headerTemplate: TemplateRef<any>;
    @Input() contentTemplate: TemplateRef<any>;
    @Input() footerTemplate: TemplateRef<any>;
}
