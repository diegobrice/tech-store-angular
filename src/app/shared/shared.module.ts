import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { CircularDirective } from './directives/circular.directive';
import { ExpPipe } from './pipes/exp.pipe';
import { MaterialModule } from '../components/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    CircularDirective,
    ExpPipe,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    CircularDirective,
    ExpPipe,
  ],
})
export class SharedModule {}
