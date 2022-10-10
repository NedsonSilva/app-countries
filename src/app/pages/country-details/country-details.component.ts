import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/core/services/countries/countries.service';

import { Countries } from './../../core/services/countries/countries.model';
import { ThemesService } from './../../core/services/themes/themes.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  country$: Observable<Countries>

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute,
    private themeService: ThemesService
  ) { }

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code')
    this.country$ = this.countriesService.getByCode(code)
  }

  get iconArrowLeft() {
    const prefix = this.themeService.currentTheme == 'light' ? 'dark' : 'light'
    return `assets/icons/svg/arrow-left-${prefix}.svg`
  }

}
