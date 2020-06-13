import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _data: any;
  private _dataOriginal: any;
  private _productsSelected: Product[];
  private _productSelected: Product;

  get categories() {
    return _.get(this._data, 'categories');
  }

  get productsSelected(): Product[] {
    return this._productsSelected;
  }

  set productsSelected(value: Product[]) {
    this._productsSelected = value;
  }

  get productSelected(): Product {
    return this._productSelected;
  }

  set productSelected(value: Product) {
    this._productSelected = value;
  }

  constructor(private http: HttpClient) { }

  getData() {
     return new Promise((resolve, reject) => {
        this.http.get('assets/data/products.json').subscribe(_data => {
           this._data = _.cloneDeep(_data);
           this._dataOriginal = _.cloneDeep(_data);
           resolve(true);
        }, error => {
          console.error('Error al cargar productos');
          reject(true);
        });
     });
  }

}
