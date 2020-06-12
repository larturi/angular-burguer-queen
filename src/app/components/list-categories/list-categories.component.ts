import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  listCategories: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listCategories = this.productService.categories;
  }

  selectCategory(category) {
    this.productService.productSelected = category.products;
  }

}
