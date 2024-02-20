import { Component, Input } from '@angular/core';
import { GenomicsViaje } from 'src/interfaces/genomics-viaje';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input({required: true}) data: GenomicsViaje[] | undefined
}
