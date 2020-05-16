import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {IUser} from '../../../../shared/interfaces/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})
export class FormRegistrationComponent implements OnInit {
  public formRegistration: FormGroup;
  public errorMessage = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    const emailRegex = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
    this.formRegistration = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.pattern(emailRegex),
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
    const user: Omit<IUser, 'tasks' | 'assignedTasks' | '_id'> = {
      name: this.formRegistration.value.name,
      email: this.formRegistration.value.email,
      password: this.formRegistration.value.password
    };
    this.authService.registrate(user).subscribe(response => {
      this.router.navigate(['/login']);
    }, response => {
      this.errorMessage = response.error.message;
    });
  }
}
