import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
// -----------------------------
// MODELS
// -----------------------------
import {ProductDescription} from '../../product';

@Component({
    selector: 'product-details-description',
    templateUrl: './product-details-description.component.html',
    styleUrls: ['./product-details-description.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsDescriptionComponent implements OnInit {

    @Input() description: ProductDescription;

    constructor() {
    }

    ngOnInit() {
    }

}
