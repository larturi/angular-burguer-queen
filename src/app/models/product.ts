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

  getExtras() {
    const extras = [];

    _.forEach(this.extras, extra => {
       const products = extra.products;

       _.forEach(products, product => {

        if (product.optionSelected) {
          extras.push({
            name: product.name,
            selected: product.optionSelected.name
          });
        } else if (product.options[0].activate) {
           extras.push({
             name: product.name
           });
        }

       });
    });

    return extras;

  }

  totalPrice() {

    let total = this.price;

    _.forEach(this.extras, extra => {
      const products = extra.products;

      _.forEach(products, product => {

       if (product.optionSelected) {
         total += product.optionSelected.price;
       } else if (product.options[0].activate) {
         total += product.options[0].price;
       }

      });
    });

    return total;

  }

}
