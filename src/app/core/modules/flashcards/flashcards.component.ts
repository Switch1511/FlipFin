import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-flashcards',
  imports: [
    ButtonModule, 
    CommonModule,
    ButtonComponent,
    TableComponent,
    CardComponent
  ],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss'
})
export class FlashcardsComponent {
  headerData = [ "Baralhos", "Novos", "Aprender", "Revisar" ]

}
