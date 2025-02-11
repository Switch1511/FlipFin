import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-anotations',
  imports: [
    ButtonModule,
    TableModule,
    NgFor,
    NgIf,
    NgStyle,
    Dialog,
    ReactiveFormsModule,
    TextareaModule
  ],
  templateUrl: './anotations.component.html',
  styleUrl: './anotations.component.scss'
})
export class AnotationsComponent {
  products: any[] = [
    {
      title: '1000',
      category: 'f230fh0g3',
      created_at: 'Bamboo Watch'
    },
    {
      title: '1000',
      category: 'f230fh0g3',
      created_at: 'Bamboo Watch'
    }
  ];

  cols = [
    { field: 'title', header: 'Titulo'},
    { field: 'category', header: 'Categoria'},
    { field: 'created_at', header: 'Data Criação'},
    { field: 'options', header: ''},
  ]

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  formGroup!: FormGroup;

  ngOnInit() {
      this.formGroup = new FormGroup({
          text: new FormControl<string | null>(null)
      });
  }

}
