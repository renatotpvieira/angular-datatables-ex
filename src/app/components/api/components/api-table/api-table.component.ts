import { NgFor, NgStyle } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net-bs5';

import { ProductsInterface } from '../../../../models/interfaces/products-interface';
import { SafePipe } from '../../../../pipes/safe.pipe';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-api-table',
  standalone: true,
  imports: [NgFor, NgStyle, SafePipe, DataTablesModule],
  templateUrl: './api-table.component.html',
  styleUrl: './api-table.component.scss',
})
export class ApiTableComponent implements OnInit, AfterViewInit {
  public readonly apiService = inject(ApiService);
  // @Input() public productsList!: ProductsInterface[];
  public productsList!: ProductsInterface[];

  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      ajax(data, callback) {
        that.apiService.getTodos().subscribe((resp) => {
          console.log(resp);
          // this.products = data.products;
          that.productsList = resp.products;
          callback({
            recordsTotal: resp.total,
            data: resp.products,
          });
        });
      },
      columnDefs: [
        { target: 0, data: 'title' },
        { target: 1, data: 'description' },
      ],
    };
  }
  dtOptions!: Config;

  ngAfterViewInit(): void {
    console.log('productsList', this.productsList);
  }
}
