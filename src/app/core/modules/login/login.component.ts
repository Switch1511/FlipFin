import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

import { AuthService } from '../../auth/auth.service';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-login',
  imports: [
    CheckboxModule,
    ButtonComponent,
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
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
