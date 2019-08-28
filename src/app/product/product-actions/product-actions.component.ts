import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'product-actions',
    templateUrl: './product-actions.component.html',
    styleUrls: ['./product-actions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductActionsComponent implements OnInit {

    @Output('delete') delete: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() valid: boolean;
    
    constructor() {
    }

    ngOnInit() {
    }
}
