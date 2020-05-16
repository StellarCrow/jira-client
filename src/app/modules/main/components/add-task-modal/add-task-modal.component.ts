import { Component } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { ITask } from '../../../../shared/interfaces/task';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../../../shared/services/notification/notification.service';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent {

  constructor(
    private taskService: TaskService,
    private dialogRef: MatDialogRef<AddTaskModalComponent>,
    private notificationService: NotificationService) {
  }

  public onSubmit(task: ITask): void {
    this.dialogRef.close();
    this.taskService.createTask(task).subscribe(res => {
      this.notificationService.notification$.next('Issue was created.');
    }, err => {
      this.notificationService.notification$.next('Error while creating issue.');
      console.log(err);
    });
  }

}
