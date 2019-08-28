import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
// -----------------------------
// MODELS
// -----------------------------
import {Product, ProductDescription, ProductPage} from '../../product';

@Component({
    selector: 'product-details-identity',
    templateUrl: './product-details-identity.component.html',
    styleUrls: ['./product-details-identity.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsIdentityComponent implements OnInit {
    @Input() name: string;
    @Input() supplier: string;
    @Input() sku: string;
    @Input() description: ProductDescription;
    @Input() page: ProductPage;

    constructor() {
    }

    ngOnInit() {
    }

}
