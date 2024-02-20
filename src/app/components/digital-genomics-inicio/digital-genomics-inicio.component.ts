import { Component } from '@angular/core';
import { GenomicsViaje } from 'src/interfaces/genomics-viaje';
import { genomicsData } from 'src/mocks/genomics-data';

@Component({
  selector: 'app-digital-genomics-inicio',
  templateUrl: './digital-genomics-inicio.component.html',
  styleUrls: ['./digital-genomics-inicio.component.scss']
})
export class DigitalGenomicsInicioComponent {

  genomicsData: GenomicsViaje[] = genomicsData

}
