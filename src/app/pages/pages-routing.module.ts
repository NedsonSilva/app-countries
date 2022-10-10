import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: CountriesListComponent
      },
      {
        path: 'list/:code/details',
        component: CountryDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
