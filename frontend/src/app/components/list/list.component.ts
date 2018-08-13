import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import {Router} from '@angular/router';

import {Product} from '../../../product.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
        console.log('Data requested ...');
        console.log(this.products);
      });
  }

  editProduct(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }

}
