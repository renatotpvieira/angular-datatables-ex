import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { WithOptionsComponent } from './components/with-options/with-options.component';
import { ZeroCongiComponent } from './components/zero-congi/zero-congi.component';

@Component({
  selector: 'app-data-tables',
  standalone: true,
  imports: [DataTablesModule, ZeroCongiComponent, WithOptionsComponent],
  templateUrl: './data-tables.component.html',
  styleUrl: './data-tables.component.scss',
})
export class DataTablesComponent {}
