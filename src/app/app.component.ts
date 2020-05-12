import {Component, OnInit} from '@angular/core';
import {apiUrl} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jira-client';

  ngOnInit(): void {
    console.log(apiUrl);
  }
}
