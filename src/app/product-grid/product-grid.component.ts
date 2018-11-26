import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {ProductsService} from '../products.service';
import {Product} from '../product.model';


@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {


  constructor(private data: ProductsService ) { }

  products: Product[];

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => {this.products = data;});
  }

}
