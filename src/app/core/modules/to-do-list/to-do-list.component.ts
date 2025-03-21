import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CardComponent } from '@components/card/card.component';

@Component({
  selector: 'app-to-do-list',
  imports: [
    ButtonComponent,
    CardComponent
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  visible = false;

  showDialog() {
    this.visible = true;
  }
}
