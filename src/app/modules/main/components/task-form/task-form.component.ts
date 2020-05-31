import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  taskPriorityList,
  taskTypeList,
  unassignedIcon,
  unassignedIconColor,
  unassignedSelectOption
} from '../../../../constants/task.constants';
import { ISelectOption } from '../../../../shared/interfaces/select-option';
import { ITask } from '../../../../shared/interfaces/task';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  public taskForm: FormGroup;
  public taskTypes: ISelectOption[] = taskTypeList;
  public taskPriorities: ISelectOption[] = taskPriorityList;
  public assigneeList: ISelectOption[] = [];

  @Output() task = new EventEmitter<ITask>();

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.fillAssigneeList();
    this.createForm();
  }

  private fillAssigneeList(): void {
    const users = this.usersService.getUsersOptionList();
    if (users) {
      this.assigneeList = [unassignedSelectOption, ...users];
    }
  }

  private createForm(): void {
    this.taskForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      assignee: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      summary: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(10000)]],
    });
  }

  public onSubmit(): void {
    this.task.emit(this.taskForm.value);
  }

}
