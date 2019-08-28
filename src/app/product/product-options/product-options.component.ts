import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
// -----------------------------
// MODELS
// -----------------------------
import {ProductPage} from '../product';

@Component({
    selector: 'product-options',
    templateUrl: './product-options.component.html',
    styleUrls: ['./product-options.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductOptionsComponent implements OnInit {
    @Input() page: ProductPage;

    constructor() {
    }

    ngOnInit() {
    }

}
