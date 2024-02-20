import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitalGenomicsInicioComponent } from './components/digital-genomics-inicio/digital-genomics-inicio.component';
import { AccordionItemComponent } from './components/accordion/components/accordion-item/accordion-item.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalGenomicsInicioComponent,
    AccordionItemComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
