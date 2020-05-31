import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-issue-dates',
  templateUrl: './issue-dates.component.html',
  styleUrls: ['./issue-dates.component.scss']
})
export class IssueDatesComponent {
  @Input() created: Date;
  @Input() updated: Date;
  @Input() deadline: Date;

}
