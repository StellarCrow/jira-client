import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [MainPageComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
