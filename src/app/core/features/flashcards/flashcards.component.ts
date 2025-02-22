import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flashcards',
  imports: [
    TableModule, 
    ButtonModule, 
    Ripple,
    Dialog,
    CommonModule
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
      children: [
        {
          name: 'teste',
        }
      ]
    }
  ];

  visible: boolean = false;
  
  showDialog() {
    this.visible = true;
  }
}
