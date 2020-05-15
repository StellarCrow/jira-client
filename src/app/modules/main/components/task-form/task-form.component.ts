import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { taskPriorityList, taskTypeList } from '../../../../constants/task.constants';
import { ISelectOption } from '../../../../shared/interfaces/select-option';
import { ITask } from '../../../../shared/interfaces/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  public taskForm: FormGroup;
  public taskTypes: ISelectOption[] = taskTypeList;
  public taskPriorities: ISelectOption[] = taskPriorityList;

  @Output() task = new EventEmitter<ITask>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.taskForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      assignee: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.maxLength(10000)]],
    });
  }

  public onSubmit(): void {
    this.task.emit(this.taskForm.value);
  }

}
