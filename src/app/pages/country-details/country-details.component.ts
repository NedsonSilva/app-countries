import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CountriesService } from 'src/app/core/services/countries/countries.service';

import { Countries } from './../../core/services/countries/countries.model';
import { ThemesService } from './../../core/services/themes/themes.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  country$: Observable<Countries>;

  private unsubs = new Subject();

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute,
    private themeService: ThemesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.unsubs)).subscribe((params) => {
      this.country$ = this.countriesService.getByCode(params.get('code'));
    });
  }

  get iconArrowLeft() {
    const prefix = this.themeService.currentTheme == 'light' ? 'dark' : 'light';
    return `assets/icons/svg/arrow-left-${prefix}.svg`;
  }

  ngOnDestroy(): void {
    this.unsubs.next(null);
    this.unsubs.complete();
  }
}
