import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-flashcards',
  imports: [
    TableModule, 
    ButtonModule, 
    Ripple,
    Dialog
  ],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss'
})
export class FlashcardsComponent {
  customers: any[] = [
    {
      id: 1000,
      name: 'James Butt',
      country: {
          name: 'Algeria',
          code: 'dz'
      },
      company: 'Benton, John B Jr',
      date: '2015-09-13',
      status: 'unqualified',
      verified: true,
      activity: 17,
      representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
      },
      balance: 70663
    }
  ];

  visible: boolean = false;
  
  showDialog() {
    this.visible = true;
  }
}
