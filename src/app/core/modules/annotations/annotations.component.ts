import { Component } from '@angular/core';

import { ButtonComponent } from '../../shared/components/button/button.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { AnnotationService } from '../../shared/services/annotation.service';

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

  columns: any[] = [
    { header: "title", field: 'title'},
    { header: "description", field: 'description'},
  ]
  data: any[] = [];

  constructor(private annotationService: AnnotationService) {}

  ngOnInit(): void {
    this.getAnnotations();
  }

  getAnnotations(){
    this.annotationService.getAnnotations().subscribe({
      next: (value) => this.data = value,
      error: (error) => console.error(error)
    })
  }
}