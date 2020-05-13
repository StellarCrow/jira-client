import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../../../shared/interfaces/user';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  public formLogin: FormGroup;
  public errorMessage = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.formLogin = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.pattern('\t^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'),
          Validators.minLength(1),
          Validators.maxLength(1000)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50)
        ]
      ]
    });
  }

  public onSubmit(): void {
    const user: Pick<IUser, 'email' | 'password'> = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    };
    this.authService.login(user).subscribe(response => {
      this.router.navigate(['/home']);
    }, response => {
      this.errorMessage = response.error.message;
    });
  }


}
