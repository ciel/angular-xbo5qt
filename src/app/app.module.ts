import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {ApplicationComponent} from './app.component';

import {ProductService} from './product/product.service';
import {AccountService} from './account/account.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([])
    ],
    declarations: [
        ApplicationComponent
    ],
    bootstrap: [
        ApplicationComponent
    ],
    providers: [
        ProductService, 
        AccountService
    ]
})
export class AppModule {
}
