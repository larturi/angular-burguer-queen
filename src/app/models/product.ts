import * as _ from 'lodash';
import { IProduct } from '../interfaces/iproduct';

export class Product implements IProduct {

  constructor(data) {
    _.set(this, 'data', data);
  }

  get extras(): any {
    return _.get(this, 'data.extras');
  }

  get name(): string {
    return _.get(this, 'data.name');
  }

  get img(): string {
    return _.get(this, 'data.img');
  }

  get price(): number {
    return _.get(this, 'data.price');
  }

  get quantity(): number {
    return _.get(this, 'data.quantity');
  }

  set quantity(value: number) {
    _.set(this, 'data.quantity', value);
  }

}
