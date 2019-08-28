import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
// -----------------------------
// MODELS
// -----------------------------
import {Product, ProductAccounts, ProductDescription, ProductInventory, ProductPage, ProductPricing} from '../product';
import {ProductService} from "../product.service";
import {AccountService} from "../../account/account.service";

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

    @Input() product: Product = new Product();

    constructor(
        private products: ProductService,
        private accounts: AccountService) {
    }

    ngOnInit() {
    }

    onDeleteProduct(id: string) {
        this.products.deleteById(id);
    }

}