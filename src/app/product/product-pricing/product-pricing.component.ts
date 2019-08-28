import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
// -----------------------------
// MODELS
// -----------------------------
import {ProductPricing} from '../product';

@Component({
    selector: 'product-pricing',
    templateUrl: './product-pricing.component.html',
    styleUrls: ['./product-pricing.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPricingComponent implements OnInit {
    @Input() pricing: ProductPricing;

    constructor() {
    }

    ngOnInit() {
    }

}
