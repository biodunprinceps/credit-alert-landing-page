import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    NgxSliderModule,
    // BrowserAnimationsModule
  ]
})
export class IndexModule { }
