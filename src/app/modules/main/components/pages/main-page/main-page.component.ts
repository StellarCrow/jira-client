import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../../services/sidenav/sidenav.service';
import { NotificationService } from '../../../../../shared/services/notification/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit, OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public username: string;

  constructor(private sidenavService: SidenavService,
              private notificationService: NotificationService,
              private snackBar: MatSnackBar,
              private usersService: UsersService) {
    this.notificationService.notification$.subscribe((message) => {
      this.snackBar.open(message, 'Close', { duration: 2500, horizontalPosition: 'right' });
    });
  }

  ngOnInit(): void {
    this.usersService.getCurrentUser().subscribe((user) => {
      this.username = user.name;
    });
    this.usersService.defineUsersOptionList();
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
