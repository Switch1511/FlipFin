import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() headerLabels: string[] = [];
  @Input() data: any[][] = [];
  @Input() hasOptions: boolean = false;
  @Input() columnWidth: string = '20%';
}
