import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BoardComponent } from './components/board/board.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';


@NgModule({
  declarations: [MainPageComponent, ToolbarComponent, BoardComponent, TaskFormComponent, ModalComponent, AddTaskModalComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
