import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { taskPriorityList, taskTypeList } from '../../../../constants/task.constants';
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

  private fillAssigneeList() {
    const icon = 'sentiment_satisfied_alt';
    const color = '#676767';
    const unassigned: ISelectOption = { name: 'Unassigned', value: 'unassigned', icon, color };
    this.assigneeList.push(unassigned);
    this.usersService.getUsersOptionList().subscribe((result) => {
        this.assigneeList = result;
      },
      res => {
        console.log(res.error.message);
      }
    );
  }

  private createForm(): void {
    this.taskForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      assignee: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      summary: ['', [Validators.required]],
      description: ['', [Validators.maxLength(10000)]],
    });
  }

  public onSubmit(): void {
    this.task.emit(this.taskForm.value);
  }

}
