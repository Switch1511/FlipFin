import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    this.loginForm.enable;
  }

  onSubmit() {
    if (this.loginForm.disabled) return;

    this.loginForm.disable();

    this.authService.login().subscribe({
      next: (res) => {
        console.log('Login bem-sucedido:', res);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao fazer login:', err);
        this.loginForm.enable();
      }
    });
  }
}
