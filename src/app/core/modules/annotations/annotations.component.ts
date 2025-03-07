import { Component } from '@angular/core';

import { ButtonComponent } from '../../shared/components/button/button.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-annotations',
  imports: [
    ButtonComponent,
    TableComponent,
    CardComponent
  ],
  templateUrl: './annotations.component.html',
  styleUrl: './annotations.component.scss'
})
export class AnnotationsComponent {
  headerData = [ "Título", "Anotação" ]
}