import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  imports: [
    BreadcrumbModule
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent{
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  routes: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Carrega os breadcrumbs imediatamente ao iniciar o componente
    this.loadBreadcrumbs();

    // Atualiza os breadcrumbs sempre que a rota mudar
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.loadBreadcrumbs());
  }

  private loadBreadcrumbs() {
    this.routes = [];
    this.buildBreadcrumb(this.route.root);

    // Atualiza os itens dinamicamente com base nos breadcrumbs
    this.items = [
      { icon: 'pi pi-home', route: '/' }, // Ícone da home
      ...this.routes.map(label => ({ label })) // Adiciona os breadcrumbs
    ];

    console.log(this.routes);
  }

  private buildBreadcrumb(route: ActivatedRoute) {
    if (route.snapshot.routeConfig?.data?.['breadcrumb']) {
      this.routes.push(route.snapshot.routeConfig.data['breadcrumb']);
    }

    // Percorre os filhos para encontrar mais breadcrumbs
    if (route.firstChild) {
      this.buildBreadcrumb(route.firstChild);
    }
  }

}
