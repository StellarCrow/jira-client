import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISelectOption } from '../../../../shared/interfaces/select-option';
import { unassignedIcon, unassignedIconColor, unassignedSelectOption } from '../../../../constants/task.constants';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public formAssignee: FormGroup;
  public assigneeList: ISelectOption[] = [];
  @Input() assignee: string;
  @Input() reporter: string;

  @Output() onChanged = new EventEmitter<{ type: string, value: string }>();

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.fillAssigneeList();
    this.initFormAssignee();
  }

  private initFormAssignee() {
    this.formAssignee = this.formBuilder.group({
      assignee: this.assignee || unassignedSelectOption.value
    });
    this.formAssignee.get('assignee').valueChanges.subscribe(value => {
      this.onChanged.emit({ value, type: 'assignee' });
    });
  }

  private fillAssigneeList(): void {
    const unassigned: ISelectOption = unassignedSelectOption;
    this.assigneeList.push(unassigned);
    const users = this.usersService.getUsersOptionList();
    if (users) {
      this.assigneeList = [...this.assigneeList, ...users];
    }
  }

}
