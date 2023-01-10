import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SummaryComponent } from './components/summary/summary.component';

// PIPES AND DIRECTIVES
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ReplaceVowelsPipe } from './pipes/replace-vowels.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ImageErrorDirective } from './directives/image-error.directive';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    SummaryComponent,
    ProductComponent,
    ProductsListComponent,
    ReversePipe,
    TimeAgoPipe,
    ReplaceVowelsPipe,
    HighlightDirective,
    ImageErrorDirective,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  exports: [
    SummaryComponent,
    ProductComponent,
    ProductsListComponent,
    ReversePipe,
    TimeAgoPipe,
    ReplaceVowelsPipe,
    HighlightDirective,
    ImageErrorDirective,
  ]
})
export class SharedModule { }
