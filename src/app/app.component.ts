import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ComponentsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FlipFin';
}
