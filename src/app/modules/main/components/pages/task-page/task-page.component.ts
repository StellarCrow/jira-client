import { Component, OnInit } from '@angular/core';
import { ITask } from '../../../../../shared/interfaces/task';
import { IssueService } from '../../../services/issue/issue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  public task: ITask;
  private taskId: string;

  constructor(private issueService: IssueService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
    });
    this.issueService.getIssueInfo(this.taskId).subscribe((task) => {
      this.task = task;
    });
  }

}
