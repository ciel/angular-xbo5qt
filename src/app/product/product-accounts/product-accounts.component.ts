import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
// -----------------------------
// MODELS
// -----------------------------
import {ProductAccounts} from '../product';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'product-accounts',
    templateUrl: './product-accounts.component.html',
    styleUrls: ['./product-accounts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductAccountsComponent implements OnInit {
    @Input() accounts: ProductAccounts;

    constructor() {
    }

    ngOnInit() {
    }

    searchIncome = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(term => term.length < 2 ? []
                : this.accounts.income.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
        )

    searchCogs = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(term => term.length < 2 ? []
                : this.accounts.cogs.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
        )

    searchCost = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(term => term.length < 2 ? []
                : this.accounts.cost.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
        )

}
