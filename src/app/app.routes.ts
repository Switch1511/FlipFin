import { AuthGuard } from './core/auth/auth.guard';
import { Routes } from '@angular/router';
import { LoginComponent } from './core/features/login/login.component';
import { HomeComponent } from './core/features/home/home.component';
import { AnotationsComponent } from './core/features/anotations/anotations.component';
import { FlashcardsComponent } from './core/features/flashcards/flashcards.component';
import { ToDoListComponent } from './core/features/to-do-list/to-do-list.component';
import { CoreComponent } from './core/core.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          breadcrumb: 'Home'
        },
      },
      {
        path: 'to-do-list',
        component: ToDoListComponent,
        data: {
          breadcrumb: 'Lista de Tarefas'
        },
      },
      {
        path: 'flashcards',
        component: FlashcardsComponent,
        data: {
          breadcrumb: 'Flashcards'
        },
      },
      {
        path: 'anotations',
        component: AnotationsComponent,
        data: {
          breadcrumb: 'Anotações'
        },
      }

    ]
  }
];
