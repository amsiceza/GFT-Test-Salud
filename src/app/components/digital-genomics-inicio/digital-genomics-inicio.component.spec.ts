import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalGenomicsInicioComponent } from './digital-genomics-inicio.component';

describe('DigitalGenomicsInicioComponent', () => {
  let component: DigitalGenomicsInicioComponent;
  let fixture: ComponentFixture<DigitalGenomicsInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalGenomicsInicioComponent]
    });
    fixture = TestBed.createComponent(DigitalGenomicsInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
