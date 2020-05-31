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
    const update = {[issue.type]: issue.value, updated: new Date()};
    this.issueService.updateIssue(this.taskId, update).subscribe(res => {
      this.notificationService.notification$.next('Issue was updated');
    }, err => {
      this.notificationService.notification$.next('Error while updating issue.');
    });
  }

}
