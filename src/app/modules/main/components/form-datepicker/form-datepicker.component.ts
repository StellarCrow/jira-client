import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-datepicker',
  templateUrl: './form-datepicker.component.html',
  styleUrls: ['./form-datepicker.component.scss']
})
export class FormDatepickerComponent {
  @Input() controlName: FormControl;
  @Input() parentForm: FormGroup;
  @Input() label: string;
  @Input() datepickerName: string;

  public filterDate(d: Date | null): boolean {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return d > yesterday;
  }

}
