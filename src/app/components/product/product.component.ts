import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = null;
  extras: any = null;
  extraSelected: number = 0;

  loadProduct = false;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {

    if (!this.productService.productSelected) {
       this.router.navigate(['/list-categories']);
    } else {
      this.product = new Product(this.productService.productSelected);

      if (this.product.extras) {
        this.extras = this.product.extras[this.extraSelected];
      }
    }

    this.loadProduct = true;

  }

  hasPrevious() {
    if (!this.product.extras) {
       return false;
    }
    return this.product.extras[this.extraSelected - 1];
  }

  hasNext() {
    if (!this.product.extras) {
       return false;
    }
    return this.product.extras[this.extraSelected + 1];
  }

  previous() {
    this.extraSelected = this.extraSelected - 1;
    this.extras = this.product.extras[this.extraSelected];
  }

  next() {
    this.extraSelected = this.extraSelected + 1;
    this.extras = this.product.extras[this.extraSelected];
  }

}
