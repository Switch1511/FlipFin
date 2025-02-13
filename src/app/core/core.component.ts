import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-core',
  imports: [
    HeaderComponent,
    BreadcrumbComponent,
    RouterOutlet
  ],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {

}
