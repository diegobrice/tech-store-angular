import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ProductComponent } from './components/product.component';

import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { CircularDirective } from './directives/circular.directive';
import { ExpPipe } from './pipes/exp.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent, ContadorComponent, ProductComponent, ExponentialPipe, HighlightDirective, CircularDirective, ExpPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
