import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// -----------------------------
// MODELS
// -----------------------------
import { Product } from './product';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchBy(args: any): Observable<Product[]> {
    return this.http.get('..').pipe(
      map((r: Product[]) => r)
    );
  }
  
  deleteById(id: string): Observable<any> {
      return this.http.delete('..').pipe(
          map((r: any) => r)
      );
  }

}