import { Countries } from './countries.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { regions } from './countries.regions';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly _baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Countries[]> {
    const url = `${this._baseUrl}/all`;
    return this.http.get<Countries[]>(url);
  }

  getByName(name: string): Observable<Countries[]> {
    const url = `${this._baseUrl}/name/${name}`;
    return this.http.get<Countries[]>(url).pipe(catchError((err) => of([])));
  }

  getByRegion(region: string): Observable<Countries[]> {
    const url = `${this._baseUrl}/region/${region}`;
    return this.http.get<Countries[]>(url);
  }

  getRegions(): Observable<string[]> {
    const url = `${this._baseUrl}/all`;
    return of(regions)
  }

  getByCode(code: string): Observable<Countries> {
    const url = `${this._baseUrl}/alpha/${code}`;
    return this.http.get<Countries[]>(url).pipe(map((country) => country[0]));
  }
}
