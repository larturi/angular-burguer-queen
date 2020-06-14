import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _order: Order;
  private _numOrder: number = 1;

  constructor(
    private http: HttpClient
  ) {
    this._order = new Order({});
  }

  get order(): Order {
    return this._order;
  }

  set order(value: Order) {
    this._order = value;
  }

  get numOrder(): number {
    return this._numOrder;
  }
  set numOrder(value: number) {
    this._numOrder = value;
  }

  convertOrder() {

    const finalOrder = {
      products: [],
      date: new Date(),
      numOrder: this._numOrder,
      priceOrder: this.order.totalOrder()
    };

    _.forEach(this.order.productsOrder, product => {

      const finalProduct = {
        name: product.name,
        priceFinal: product.totalPrice() * product.quantity,
        extras: product.getExtras(),
        quantity: product.quantity
      };

      finalOrder.products.push(finalProduct);

    });

    this._numOrder++;

    return finalOrder;

    }

    createOrder(): Observable<any> {

      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');

      const url = 'https://burger-queen-2e52e.firebaseio.com/orders.json';

      const body = JSON.stringify(this.convertOrder());

      return this.http.post(url, body, { headers });

    }

    clearOrder() {
      this.order = new Order({});
    }

}
