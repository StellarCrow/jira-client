import { Component, OnInit } from '@angular/core';
import { ITask } from '../../../../../shared/interfaces/task';
import { IssueService } from '../../../services/issue/issue.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../../../shared/services/notification/notification.service';
import { IUser } from '../../../../../shared/interfaces/user';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  public task: ITask;
  public reporter: string;
  private taskId: string;

  constructor(private issueService: IssueService,
              private route: ActivatedRoute,
              private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = params.id;
    });
    this.issueService.getIssueInfo(this.taskId).subscribe((task) => {
      this.task = task;
      this.reporter = this.task.reporter && (this.task.reporter as IUser).name || '';
    });
  }

  public updateIssue(issue: { type: string, value: string }): void {
    let update;
    let option = '';
    switch (issue.type) {
      case 'type': {
        update = { type: issue.value };
        break;
      }
      case 'priority': {
        update = { priority: issue.value };
        break;
      }
      case 'assignee': {
        update = { assignee: issue.value };
        option = 'assign';
        break;
      }
      case 'summary': {
        update = { summary: issue.value };
        break;
      }
      case 'description': {
        update = { description: issue.value };
        break;
      }
    }

    update.updated = Date.now();
    this.issueService.updateIssue(this.taskId, update, option).subscribe(res => {
      this.notificationService.notification$.next('Issue was updated');
    }, err => {
      this.notificationService.notification$.next('Error while updating issue.');
    });
  }

}
