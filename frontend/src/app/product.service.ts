import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get(`${this.uri}/products`);
}

getProductById(id) {
  return this.http.get(`${this.uri}/products/${id}`);
}


addProduct(name, image, price_1, price_2, price_3, size_1, size_2, size_3, category, tags, status, description) {
  const product = {
    name: name,
    image: image,
    price_1: price_1,
    price_2: price_2,
    price_3: price_3,
    size_1: size_1,
    size_2: size_2,
    size_3: size_3,
    category: category,
    tags: tags,
    status: status,
    description: description
  };
  return this.http.post(`${this.uri}/products/add`, product);
}

updateProduct(id, name, image, price_1, price_2, price_3, size_1, size_2, size_3, category, tags, status, description) {
  const product = {
    id: id,
    name: name,
    image: image,
    price_1: price_1,
    price_2: price_2,
    price_3: price_3,
    size_1: size_1,
    size_2: size_2,
    size_3: size_3,
    category: category,
    tags: tags,
    status: status,
    description: description
  };
  return this.http.post(`${this.uri}/products/update/${id}`, product);
}

deleteProduct(id) {
  return this.http.get(`${this.uri}/products/delete/${id}`);
}
}

