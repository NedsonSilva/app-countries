import { Component } from '@angular/core';
import { ThemesService } from './core/services/themes/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private themeService: ThemesService) {}
}
