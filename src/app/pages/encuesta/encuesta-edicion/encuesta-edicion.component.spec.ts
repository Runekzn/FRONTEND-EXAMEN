import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaEdicionComponent } from './encuesta-edicion.component';

describe('EncuestaEdicionComponent', () => {
  let component: EncuestaEdicionComponent;
  let fixture: ComponentFixture<EncuestaEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
