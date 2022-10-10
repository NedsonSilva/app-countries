import { Component, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { ThemesService } from 'src/app/core/services/themes/themes.service';

import { Countries } from '../../core/services/countries/countries.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  countries$: Observable<Countries[]>;
  regions$: Observable<string[]>;

  get iconSearch() {
    const prefix = this.themeService.currentTheme == 'light' ? 'dark' : 'light';
    return `assets/icons/svg/search-${prefix}.svg`;
  }

  constructor(
    private service: CountriesService,
    private themeService: ThemesService
  ) {}

  ngOnInit(): void {
    this.countries$ = this.service.getAll();
    this.getAllRegions();
  }

  getAllRegions() {
    this.regions$ = this.service.getRegions()
  }

  getByName(name: string) {
    this.countries$ =
      name?.length > 0 ? this.service.getByName(name) : this.service.getAll();
  }

  getByRegion(region: string) {
    this.countries$ = region
      ? this.service.getByRegion(region)
      : this.service.getAll();
  }
}
