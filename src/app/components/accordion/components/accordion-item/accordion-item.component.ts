import { Component, Input } from '@angular/core';
import { GenomicsViaje } from 'src/interfaces/genomics-viaje';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {
  @Input({required: true}) item: GenomicsViaje | undefined

  isOpen : boolean = false

  handleOpen(){
    this.isOpen = !this.isOpen
  }
}
