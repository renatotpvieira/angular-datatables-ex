import { Component, inject, OnInit } from '@angular/core';
import { ProductsInterface } from '../../models/interfaces/products-interface';
import { ApiService } from '../../services/api.service';
import { ApiTableComponent } from './components/api-table/api-table.component';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [ApiTableComponent],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss',
})
export class ApiComponent implements OnInit {
  private readonly apiService = inject(ApiService);
  public products!: ProductsInterface[];

  ngOnInit(): void {
    this.apiService.getTodos().subscribe((data) => {
      console.log(data.products[0].reviews[0].rating);
      this.products = data.products;
    });
  }
}
