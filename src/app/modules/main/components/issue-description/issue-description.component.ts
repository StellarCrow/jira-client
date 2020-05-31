import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-issue-description',
  templateUrl: './issue-description.component.html',
  styleUrls: ['./issue-description.component.scss']
})
export class IssueDescriptionComponent implements OnInit {
  public formDescription: FormGroup;

  @Input() description: string;
  @Output() onChanged = new EventEmitter<{ type: string, value: string }>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formDescription = this.formBuilder.group({
      description: [this.description, [Validators.maxLength(1000)]]
    });

    this.formDescription.get('description').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(1000)
    ).subscribe(value => {
      this.onChanged.emit({ value, type: 'description' });
    });
  }

}
