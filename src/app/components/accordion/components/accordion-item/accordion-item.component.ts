import { Component, Input, OnInit } from '@angular/core';
import { GenomicsViaje } from 'src/interfaces/genomics-viaje';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent{
  @Input({required: true}) item: GenomicsViaje | undefined
  @Input() isLast : boolean | undefined

  isOpen : boolean = false

  handleOpen(){
    this.isOpen = !this.isOpen
  }
}
