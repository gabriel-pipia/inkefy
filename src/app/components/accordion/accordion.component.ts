import { Component } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  OpenAccordian(Item: any) {
    let accordian = Item.target;
    accordian.classList.toggle('active');
  }
}
