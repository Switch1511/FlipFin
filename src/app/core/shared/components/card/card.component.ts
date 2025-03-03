import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  host: {
    '[style.width]': 'width',
    '[style.height]': 'height'
  },
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() width: string = '65%';
  @Input() height: string = 'auto';
  @Input() overflowY: 'scroll' | 'auto' | 'hidden' | 'visible' = 'hidden';
}
