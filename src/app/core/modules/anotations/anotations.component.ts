import { Component } from '@angular/core';

import { ButtonComponent } from '../../shared/components/button/button.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-anotations',
  imports: [
    ButtonComponent,
    TableComponent,
    CardComponent
  ],
  templateUrl: './anotations.component.html',
  styleUrl: './anotations.component.scss'
})
export class AnotationsComponent {
  headerData = [ "Título", "Anotação" ]
}