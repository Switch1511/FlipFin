import { AuthGuard } from './core/auth/auth.guard';
import { Routes } from '@angular/router';
import { LoginComponent } from './core/modules/login/login.component';
import { HomeComponent } from './core/modules/home/home.component';
import { AnotationsComponent } from './core/modules/anotations/anotations.component';
import { FlashcardsComponent } from './core/modules/flashcards/flashcards.component';
import { ToDoListComponent } from './core/modules/to-do-list/to-do-list.component';
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
  },
  {
    path: '**',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
];
