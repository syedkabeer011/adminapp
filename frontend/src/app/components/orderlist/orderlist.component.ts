import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import {Router} from '@angular/router';

import {Order} from '../../../order.model';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.orderService
      .getOrders()
      .subscribe((data: Order[]) => {
        this.orders = data;
        console.log('Data requested ...');
        console.log(this.orders);
      });
  }

}
