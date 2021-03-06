import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(`${this.uri}/orders`);
  }

}
