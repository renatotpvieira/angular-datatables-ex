import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net-bs5';

@Component({
  selector: 'app-with-options',
  standalone: true,
  imports: [DataTablesModule],
  templateUrl: './with-options.component.html',
  styleUrl: './with-options.component.scss',
})
export class WithOptionsComponent implements OnInit {
  dtOptions: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
  }
}
