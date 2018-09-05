import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Product } from '../../../product.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  product: any = {};
  updateForm: FormGroup;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      image: '',
      price_1: '',
      price_2: '',
      price_3: '',
      size_1: '',
      size_2: '',
      size_3: '',
      category: '',
      tags: '',
      status: '',
      description: ''
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.productService.getProductById(this.id).subscribe(res => {
        this.product = res;
        this.updateForm.get('name').setValue(this.product.name);
        this.updateForm.get('image').setValue(this.product.image);
        this.updateForm.get('price_1').setValue(this.product.price_1);
        this.updateForm.get('price_2').setValue(this.product.price_2);
        this.updateForm.get('price_3').setValue(this.product.price_3);
        this.updateForm.get('size_1').setValue(this.product.size_1);
        this.updateForm.get('size_2').setValue(this.product.size_2);
        this.updateForm.get('size_3').setValue(this.product.size_3);
        this.updateForm.get('category').setValue(this.product.category);
        this.updateForm.get('tags').setValue(this.product.tags);
        this.updateForm.get('status').setValue(this.product.status);
        this.updateForm.get('description').setValue(this.product.description);
      });
    });
  }


  updateProduct(name, image, price_1, price_2, price_3, size_1, size_2, size_3, category, tags, status, description) {
    // tslint:disable-next-line:max-line-length
    this.productService.updateProduct(this.id, name, image, price_1, price_2, price_3, size_1, size_2, size_3, category, tags, status, description).subscribe(() => {
    });
  }

}
