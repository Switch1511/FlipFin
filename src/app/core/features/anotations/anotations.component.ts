import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { PaginatorModule } from 'primeng/paginator';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-anotations',
  imports: [
    ButtonModule,
    TableModule,
    NgStyle,
    Dialog,
    ReactiveFormsModule,
    TextareaModule,
    PaginatorModule
  ],
  templateUrl: './anotations.component.html',
  styleUrl: './anotations.component.scss'
})
export class AnotationsComponent {
  first: number = 0;
  rows: number = 10;

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
  ];

  visible: boolean = false;
  
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null)
    });
  }

  showDialog() {
    this.visible = true;
  }


  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}