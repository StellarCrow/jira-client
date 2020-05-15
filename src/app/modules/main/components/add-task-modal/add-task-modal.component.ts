import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { ITask } from '../../../../shared/interfaces/task';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent {

  constructor(private taskService: TaskService) {
  }

  public onSubmit(task: ITask): void {
    this.taskService.createTask(task);
  }

}
