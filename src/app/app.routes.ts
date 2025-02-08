import { AuthGuard } from './core/auth/auth.guard';
import { Routes } from '@angular/router';
import { LoginComponent } from './core/features/login/login.component';
import { HomeComponent } from './core/features/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    canActivate: [AuthGuard],
  }
];
