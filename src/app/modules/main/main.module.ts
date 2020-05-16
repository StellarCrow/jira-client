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
import { ReactiveFormsModule } from '@angular/forms';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormDatepickerComponent } from './components/form-datepicker/form-datepicker.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ToolbarComponent,
    BoardComponent,
    TaskFormComponent,
    ModalComponent,
    AddTaskModalComponent,
    FormSelectComponent,
    FormDatepickerComponent,
    BoardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MainModule {
}
