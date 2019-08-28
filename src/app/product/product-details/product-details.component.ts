import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
// -----------------------------
// MODELS
// -----------------------------
import {Product} from '../product';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {

    @Input() product: Product;

    constructor() {
    }

    ngOnInit() {
    }

}