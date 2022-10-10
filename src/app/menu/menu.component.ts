import { Component } from '@angular/core';

import { ThemesService } from './../core/services/themes/themes.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private themeService: ThemesService) {}

  get iconDarkMode() {
    return `assets/icons/svg/dark_mode-${this.themeService.currentTheme}.svg`
  }

  handleThemeSwitch() {
    const { currentTheme } = this.themeService;
    this.themeService.setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }
}
