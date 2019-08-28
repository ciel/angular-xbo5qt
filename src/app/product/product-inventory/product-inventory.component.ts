import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
// -----------------------------
// MODELS
// -----------------------------
import {Product, ProductInventory} from '../product';

@Component({
    selector: 'product-inventory',
    templateUrl: './product-inventory.component.html',
    styleUrls: ['./product-inventory.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductInventoryComponent implements OnInit {
    @Input() inventory: ProductInventory;

    constructor() {
    }

    ngOnInit() {
    }

}
