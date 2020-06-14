import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('modal_order', {static: false}) modalOrder;
  @ViewChild('modal_num_order', {static: false}) modalNumOrder;

  constructor(
    private modalService: NgbModal,
    public orderService: OrderService
    ) { }

  ngOnInit(): void {
  }

  openModalOrder() {
    this.modalService.open(this.modalOrder, {windowClass: 'my-modal-dialog'}).result.then(result => {
       if (result === 'yes') {
          this.orderService.createOrder().subscribe(data => {
            console.log('Se ha creado el objeto en firebase', data);
            this.orderService.clearOrder();

            this.modalService.open(this.modalNumOrder);

          }, error => {
            console.log('Ha habido un error', error);
          });
       } else {
          console.log('Pedido cancelado');
       }
    });
  }

}
