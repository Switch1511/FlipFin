import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { Router, RouterLink } from '@angular/router';
import { Menu } from 'primeng/menu';
import { AuthService } from '../../../auth/auth.service';

interface MenuItem {
  label: string;
  icon?: string;
  link: string;
}

@Component({
  selector: 'app-header',
  imports: [
    MenubarModule,
    NgClass,
    NgFor,
    NgIf,
    RouterLink,
    Menu
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi-home', link: '/' },
    { label: 'Lista de Tarefas', icon: 'pi-list', link: '/to-do-list' },
    { label: 'Flashcards', icon: 'pi-copy', link: '/flashcards' },
    { label: 'Anotações', icon: 'pi-pen-to-square', link: '/anotations' },
  ];

  items = [
    {
      label: 'Opções',
      items: [
        {
          label: 'Sair',
          icon: 'pi pi-sign-out',
          command: () => {
            this.logout();
          }
        }
      ]
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
