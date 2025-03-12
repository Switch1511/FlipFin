import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { CardComponent } from '../../shared/components/card/card.component';
import Chart from 'chart.js/auto';
import { FlashcardService } from '../../shared/services/flashcard.service';

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
  columns: any[] = [
    { header: "Baralhos", field: 'deck'},
    { header: "Novos", field: 'newCard'},
    { header: "Aprender", field: 'learnCard'},
    { header: "Revisar", field: 'reviewCard'},
  ]
  title = 'ng-chart';
  chart: any = [];
  data: any[] = []

  constructor(
    private flashcardService: FlashcardService
  ){ }

  ngOnInit() {
    this.getFlashcards();
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: ['Novos', 'Aprender', 'Revisar'],
        datasets: [
          {
            label: 'Cards',
            data: [12, 19, 3],
            backgroundColor: [
              'rgba(54, 162, 235)', // Azul
              'rgba(255, 99, 132)', // Vermelho
              'rgba(75, 192, 192)', // Verde
            ],
            borderWidth: 1,
          },
        ],
    
      },
      options: {
          plugins: {
            legend: {
              display: false,
              align: 'start',
              position: 'bottom',
              labels: {
                boxWidth: 30,
                boxHeight: 30,
                
              },
              
            }
          },
          responsive: true,
      },
      
      
    });
  }

  getFlashcards(){
    this.flashcardService.getFlashcards().subscribe({
      next: (value) => {
        this.data = value;
      },
      error: (error) => console.error(error)
    })
  }
}
