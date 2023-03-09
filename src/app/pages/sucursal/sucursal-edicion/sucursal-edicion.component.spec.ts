import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalEdicionComponent } from './sucursal-edicion.component';

describe('SucursalEdicionComponent', () => {
  let component: SucursalEdicionComponent;
  let fixture: ComponentFixture<SucursalEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucursalEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
