import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProductService } from '../../product.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-createp',
  templateUrl: './createp.component.html',
  styleUrls: ['./createp.component.css']
})
export class CreatepComponent implements OnInit {

  createForm: FormGroup;


  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
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

   addIssue(name, image, price_1, price_2, price_3, size_1, size_2, size_3, category, tags, status, description) {
    // tslint:disable-next-line:max-line-length
    this.productService.addProduct(name, image, price_1, price_2, price_3, size_1, size_2, size_3, category, tags, status, description).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {

  $(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
      const input = $(this),
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
      input.trigger('fileselect', [label]);
      });

      $('.btn-file :file').on('fileselect', function(event, label) {

          const input = $(this).parents('.input-group').find(':text'),
              log = label;

          if ( input.length ) {
              input.val(log);
          } else {
              if ( log ) { alert(log); }
          }

      });
      function readURL(input) {
          if (input.files && input.files[0]) {
              const reader = new FileReader();

              reader.onload = function (e) {
                  $('#img-upload').attr('src', e.target);
              };

              reader.readAsDataURL(input.files[0]);
          }
      }

      $('#imgInp').change(function() {
          readURL(this);
      });
    });



  }

}
