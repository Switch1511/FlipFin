import { Routes } from '@angular/router';
import { LoginComponent } from './core/features/login/login.component';
import { HomeComponent } from './core/features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
