import { Component, Input, OnInit } from '@angular/core';
import { ISelectOption } from '../../../../shared/interfaces/select-option';
import { taskTypeList } from '../../../../constants/task.constants';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  public taskTypes: ISelectOption[] = taskTypeList;
  public formType: FormGroup;

  @Input() type: string;
  @Input() priority: string;
  @Input() status: string;
  @Input() resolution: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formType = this.formBuilder.group({
      type: this.type
    });
  }

}
