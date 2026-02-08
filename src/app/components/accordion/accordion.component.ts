import { Component, Input } from '@angular/core';

export interface AccordionItem {
  title: string;
  content: string;
  isOpen?: boolean;
}

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: false
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];

  toggleItem(item: AccordionItem) {
    // Close other items if you want accordion behavior (one open at a time)
    // this.items.forEach(i => {
    //   if (i !== item) i.isOpen = false;
    // });
    item.isOpen = !item.isOpen;
  }
}
