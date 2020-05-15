import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav/sidenav.service';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(public dialog: MatDialog, private sidenavService: SidenavService, private authService: AuthService, private router: Router) {
  }

  public toggleSidenav(): void {
    this.sidenavService.toggle();
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskModalComponent, { minWidth: '60%' });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

}
