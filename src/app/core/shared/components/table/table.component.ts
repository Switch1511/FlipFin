import { Component, Input } from '@angular/core';

interface TableColumn {
  header: string;
  field: string;
}

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() headerLabels: string[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() hasOptions: boolean = false;
  @Input() columnWidth: string = '20%';
}
