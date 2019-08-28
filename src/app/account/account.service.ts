import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map }        from 'rxjs/operators';
// -----------------------------
// MODELS
// -----------------------------
import { Account } from './account';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  fetch(args: any): Observable<Account> {
    return this.http.get('..').pipe(
      map((r: Account) => r)
    );
  }

}