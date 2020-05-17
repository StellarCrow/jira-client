import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITask } from '../../../../shared/interfaces/task';
import { taskPriorityList, taskTypeList } from '../../../../constants/task.constants';
import { ISelectOption } from '../../../../shared/interfaces/select-option';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public taskType: ISelectOption;
  public taskPriority: ISelectOption;

  @Input() task: ITask;
  @Input() cardColor: string;


  ngOnInit(): void {
    this.taskType = taskTypeList.find(type => this.task.type === type.value);
    this.taskPriority = taskPriorityList.find(priority => this.task.priority === priority.value);
  }

}
