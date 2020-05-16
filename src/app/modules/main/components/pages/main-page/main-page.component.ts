import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../../services/sidenav/sidenav.service';
import { NotificationService } from '../../../../../shared/services/notification/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService, private notificationService: NotificationService, private snackBar: MatSnackBar) {
    this.notificationService.notification$.subscribe((message) => {
      this.snackBar.open(message, 'Close', { duration: 2500, horizontalPosition: 'right' });
    });
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
