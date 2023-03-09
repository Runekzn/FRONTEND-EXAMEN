import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestadoEdicionComponent } from './encuestado-edicion.component';

describe('EncuestadoEdicionComponent', () => {
  let component: EncuestadoEdicionComponent;
  let fixture: ComponentFixture<EncuestadoEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestadoEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestadoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
