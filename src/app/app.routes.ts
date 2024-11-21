import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiComponent } from './components/api/api.component';
import { DataTablesComponent } from './components/data-tables/data-tables.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'api',
    component: ApiComponent,
  },
  {
    path: 'data-tables',
    component: DataTablesComponent,
  },
];
