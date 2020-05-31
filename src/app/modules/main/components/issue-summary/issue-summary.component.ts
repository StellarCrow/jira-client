import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-issue-summary',
  templateUrl: './issue-summary.component.html',
  styleUrls: ['./issue-summary.component.scss']
})
export class IssueSummaryComponent implements OnInit {
  public formSummary: FormGroup;

  @Input() summary: string;
  @Output() onChanged = new EventEmitter<{ type: string, value: string }>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formSummary = this.formBuilder.group({
      summary: [this.summary, [Validators.minLength(1), Validators.maxLength(100)]]
    });

    this.formSummary.get('summary').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(1000)
    ).subscribe(value => {
      this.onChanged.emit({ value, type: 'summary' });
    });
  }

}
