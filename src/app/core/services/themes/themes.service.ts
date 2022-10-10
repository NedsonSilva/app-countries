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

  constructor(@Inject(DOCUMENT) private document: Document) {
    const userPreferenceTheme: ThemeTypes =
      (localStorage.getItem('theme') as ThemeTypes) || 'light';
    this.setTheme(userPreferenceTheme);
  }

  private setCurrentThemeToStorage() {
    localStorage.setItem('theme', this.currentTheme);
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
    this.setCurrentThemeToStorage();
  }

  private get bodyEl(): HTMLBodyElement {
    return this.document.body as HTMLBodyElement;
  }

  get currentTheme(): ThemeTypes {
    const isLightTheme = this.bodyEl.classList.contains('light-theme');
    return isLightTheme ? 'light' : 'dark';
  }
}
