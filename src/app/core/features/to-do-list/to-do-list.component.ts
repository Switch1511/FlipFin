import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-to-do-list',
  imports: [
    Dialog,
    ButtonModule,
    PanelModule,
    TextareaModule
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
