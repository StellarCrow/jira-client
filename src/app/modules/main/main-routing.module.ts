import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { BoardComponent } from './components/board/board.component';
import { TaskPageComponent } from './components/pages/task-page/task-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: BoardComponent, pathMatch: 'full'},
      { path: 'task/:id', component: TaskPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
