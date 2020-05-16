import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ISelectOption } from '../../../../shared/interfaces/select-option';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  public selected: ISelectOption;

  @Input() parentForm: FormGroup;
  @Input() controlName: FormControl;
  @Input() label: string;
  @Input() selectionList: ISelectOption[];

  ngOnInit(): void {
    this.selected = this.selectionList[0];
  }

  public onChange(event: MatSelectChange): void {
    this.selected = this.selectionList.find((opt) => opt.value === event.value);
  }
}
