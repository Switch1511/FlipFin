import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { Router, RouterLink } from '@angular/router';
import { Menu } from 'primeng/menu';
import { AuthService } from '../../../auth/auth.service';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

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
    RouterLink,
    Menu,
    DrawerModule,
    ButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  visible: boolean = false;

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
