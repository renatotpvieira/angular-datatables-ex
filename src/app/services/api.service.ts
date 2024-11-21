import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsListInterface } from '../models/interfaces/products-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http: HttpClient = inject(HttpClient);

  constructor() {}

  getTodos(id: number = 0) {
    return this.http.get<ProductsListInterface>(
      'https://dummyjson.com/products' + (id != 0 ? '/' + id : '')
    );
  }
}
