import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

import { Product } from '../../models/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public listProducts: Product[] = [];

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.listProducts = this.productService.productsSelected;

    if (!this.listProducts) {
      this.router.navigate(['/list-categories']);
    }
  }

  selectProduct(product) {
    this.productService.productSelected = product;
  }

}
