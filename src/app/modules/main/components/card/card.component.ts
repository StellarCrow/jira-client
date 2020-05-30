import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITask } from '../../../../shared/interfaces/task';
import { taskPriorityList, taskTypeList } from '../../../../constants/task.constants';
import { ISelectOption } from '../../../../shared/interfaces/select-option';
import { IUser } from '../../../../shared/interfaces/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public taskType: ISelectOption;
  public taskPriority: ISelectOption;
  public assignee: string;

  @Input() task: ITask;
  @Input() cardColor: string;


  ngOnInit(): void {
    this.assignee = this.task.assignee && (this.task.assignee as IUser).name || '';
    this.taskType = taskTypeList.find(type => this.task.type === type.value);
    this.taskPriority = taskPriorityList.find(priority => this.task.priority === priority.value);
  }

}
