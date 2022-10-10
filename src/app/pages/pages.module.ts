import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { MenuComponent } from '../menu/menu.component';
import { CardModule } from '../shared/components/card/card.module';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    CountriesListComponent,
    MenuComponent,
    PagesComponent,
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgSelectModule,
    CardModule,
    SpinnerModule
  ]
})
export class PagesModule { }
