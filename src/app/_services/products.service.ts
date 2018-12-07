import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Products, Product } from '../_models/product.model';
import { map, catchError } from "rxjs/operators"

const API_URL = 'http://localhost:61017/api/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

   getProducts(): Observable<Product[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<Products>(API_URL,httpOptions).pipe(map(data => data.products));
    // .catch(this.handleError);
  }
}



