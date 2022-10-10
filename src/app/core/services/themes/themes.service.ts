import { themeLight } from './themes-light';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { themeDark } from './themes-dark';

type ThemeTypes = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private themes = {
    dark: themeDark,
    light: themeLight,
  };

  private _currentTheme: ThemeTypes = 'light'

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorageTheme = localStorage.getItem('app-countries-theme') as ThemeTypes
    this.setTheme(localStorageTheme || this.currentTheme);
  }

  setTheme(theme: ThemeTypes) {
    const element = this.bodyEl;
    const currentTheme = this.themes[theme];
    const themeRemove: ThemeTypes = theme === 'dark' ? 'light' : 'dark';

    for (const key in currentTheme.variables) {
      element.style.setProperty(key, currentTheme.variables[key]);
    }

    element.classList.remove(`${themeRemove}-theme`);
    element.classList.add(`${currentTheme.name}-theme`);
    this.currentTheme = theme
  }

  private get bodyEl(): HTMLBodyElement {
    return this.document.body as HTMLBodyElement;
  }

  get currentTheme(): ThemeTypes {
    return this._currentTheme
  }

  private set currentTheme(theme: ThemeTypes) {
    localStorage.setItem('app-countries-theme', theme)
    this._currentTheme = theme
  }
}
