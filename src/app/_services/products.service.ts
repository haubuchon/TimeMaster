import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Products, Product } from '../_models/product.model';
import { map, catchError } from "rxjs/operators"
import { AppConfig } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private APIURL: String;
  
  constructor(private http: HttpClient) {
    this.APIURL = AppConfig.settings.crtidata;
  }

   getProducts(): Observable<Product[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<Products>(this.APIURL + "/Products",httpOptions).pipe(map(data => data.products));
    // .catch(this.handleError);
  }
}



