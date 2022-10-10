import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './shared/components/card/card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemesService } from './core/services/themes/themes.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ThemesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
