import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoTrabajamosComponent } from './como-trabajamos.component';

describe('ComoTrabajamosComponent', () => {
  let component: ComoTrabajamosComponent;
  let fixture: ComponentFixture<ComoTrabajamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoTrabajamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoTrabajamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
