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
  @Input() hasOptions = false;
  @Input() columnWidth = '20%';
  @Input() actions : { icon: string, action: (item: any) => void }[] = [];

  handleAction(action: (item: any) => void, item: any) {
    action(item);
  }
}
