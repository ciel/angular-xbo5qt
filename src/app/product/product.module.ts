import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
// -----------------------------
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// -----------------------------
import {ProductComponent} from './product/product.component';
import {ProductOptionsComponent} from './product-options/product-options.component';
import {ProductInventoryComponent} from './product-inventory/product-inventory.component';
import {ProductAccountsComponent} from './product-accounts/product-accounts.component';
import {ProductPricingComponent} from './product-pricing/product-pricing.component';
import {ProductDetailsImageComponent} from './product-details/product-details-image/product-details-image.component';
import {ProductDetailsDescriptionComponent} from './product-details/product-details-description/product-details-description.component';
import {ProductDetailsIdentityComponent} from './product-details/product-details-identity/product-details-identity.component';
import {ProductActionsComponent} from './product-actions/product-actions.component';
import {ApplicationComponent} from "../app.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ApplicationComponent,
        ProductDetailsComponent,
        ProductComponent,
        ProductOptionsComponent,
        ProductInventoryComponent,
        ProductAccountsComponent,
        ProductPricingComponent,
        ProductDetailsImageComponent,
        ProductDetailsDescriptionComponent,
        ProductDetailsIdentityComponent,
        ProductActionsComponent
    ],
    exports: [
        ProductComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FormsModule
    ]
})
export class ProductModule {
}
