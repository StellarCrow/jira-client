import { Component, OnInit } from '@angular/core';
import { ITask } from '../../../../shared/interfaces/task';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public todoData: ITask[];
  public progressData: ITask[];
  public testingData: ITask[];
  public doneData: ITask[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((res) => {
      this.todoData = res.todo || [];
      this.progressData = res.progress || [];
      this.testingData = res.testing || [];
      this.doneData = res.done || [];
    });
  }

}
