import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask } from '../../../../shared/interfaces/task';
import { TaskService } from '../../services/task/task.service';
import { taskStatusList } from '../../../../constants/task.constants';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent {
  @Input() data: ITask[];
  @Input() listHeader: string;
  @Input() listId: string;
  @Input() listName: string;
  @Input() listColor: string;

  constructor(private taskService: TaskService) {
  }

  get count() {
    return this.data ? this.data.length.toString() : '0';
  }

  public drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const elementIndex = event.currentIndex;
      const taskId = event.container.data[elementIndex]._id;
      const listId = event.container.id.toUpperCase();
      const status = taskStatusList[listId];
      this.taskService.changeTaskStatus(taskId, status).subscribe();
    }
  }

}
