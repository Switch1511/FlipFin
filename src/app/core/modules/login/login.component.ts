import { AuthService } from '../../auth/auth.service';
import { Component, inject, OnInit } from '@angular/core';
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

  protected formBuilderService = inject(FormBuilder);

  form = this.formBuilderService.group({
    email: [''],
    password: ['']
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form.enable;
  }

  onSubmit() {
    if (this.form.disabled) return;

    this.form.disable();

    this.authService.login().subscribe({
      next: (res) => {
        console.log('Login bem-sucedido:', res);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao fazer login:', err);
        this.form.enable();
      }
    });
  }
}
