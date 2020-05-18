import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISelectOption } from '../../../../shared/interfaces/select-option';
import { taskPriorityList, taskTypeList, taskStatusList } from '../../../../constants/task.constants';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  public taskTypes: ISelectOption[] = taskTypeList;
  public taskPriorities: ISelectOption[] = taskPriorityList;
  public formType: FormGroup;
  public formPriority: FormGroup;

  @Input() type: string;
  @Input() priority: string;
  @Input() status: string;
  @Input() resolution: string;

  @Output() onChanged = new EventEmitter<{ type: string, value: string }>();

  constructor(private formBuilder: FormBuilder) {
  }

  get statusStyle(): string {
    switch (this.status) {
      case taskStatusList.TODO: {
        return 'status--todo';
      }
      case taskStatusList.PROGRESS: {
        return 'status--progress';
      }
      case taskStatusList.TESTING: {
        return 'status--testing';
      }
      case taskStatusList.DONE: {
        return 'status--done';
      }
    }
  }

  ngOnInit(): void {
    this.initFormType();
    this.initFormPriority();
  }

  private initFormType() {
    this.formType = this.formBuilder.group({
      type: this.type
    });
    this.formType.get('type').valueChanges.subscribe(value => {
      this.onChanged.emit({ value, type: 'type' });
    });
  }

  private initFormPriority() {
    this.formPriority = this.formBuilder.group({
      priority: this.priority
    });
    this.formPriority.get('priority').valueChanges.subscribe(value => {
      this.onChanged.emit({ value, type: 'priority' });
    });
  }

}
