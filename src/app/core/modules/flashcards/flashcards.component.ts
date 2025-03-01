import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-flashcards',
  imports: [
    TableModule, 
    ButtonModule, 
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss'
})
export class FlashcardsComponent {
  customers: any[] = [
    {
      id: 1,
      name: 'James Butt',
      new: 5,
      learn: 3,
      review: 32,
      children: [
        {
          name: 'teste',
          new: 6,
          learn: 3,
          review: 0,
        },
        {
          name: 'teste1',
        },
        {
          name: 'teste4',
        }
      ]
    },
    {
      id: 2,
      name: 'teste',
      new: 6,
      learn: 3,
      review: 0,
      children: [
        {
          name: 'teste',
          new: 6,
          learn: 3,
          review: 0,
        }
      ]
    }
  ];

  visible: boolean = false;
  
  showDialog() {
    this.visible = true;
  }
}
