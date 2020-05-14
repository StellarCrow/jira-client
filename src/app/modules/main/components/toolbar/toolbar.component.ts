import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav/sidenav.service';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private sidenavService: SidenavService, private authService: AuthService, private router: Router) {
  }

  public toggleSidenav(): void {
    this.sidenavService.toggle();
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
