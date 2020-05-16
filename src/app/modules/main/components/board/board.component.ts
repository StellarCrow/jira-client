import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask } from '../../../../shared/interfaces/task';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public todoData: ITask[];
  public progressData: ITask[] = [];
  public testingData: ITask[] = [];
  public doneData: ITask[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(res => {
      this.todoData = res;
    });
  }

}
