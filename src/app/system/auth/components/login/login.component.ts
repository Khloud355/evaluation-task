import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InputFieldComponent } from '../../../../shared/components/input-field/input-field.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    InputFieldComponent,
    ButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnChanges {
  userLoginForm!: FormGroup;
  allUsers: any[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router // private toaster: ToastrService
  ) {}

  ngOnInit() {
    this.intiateUserLoginForm();
  }
  ngOnChanges(): void {
    this.intiateUserLoginForm();
  }

  intiateUserLoginForm() {
    this.userLoginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  loginUserData() {
    localStorage.setItem(
      'User Login Data',
      JSON.stringify(this.userLoginForm.value)
    );

    this.router.navigate(['/products']);
  }
}
