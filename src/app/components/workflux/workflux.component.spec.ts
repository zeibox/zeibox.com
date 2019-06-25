import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkfluxComponent } from './workflux.component';

describe('WorkfluxComponent', () => {
  let component: WorkfluxComponent;
  let fixture: ComponentFixture<WorkfluxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkfluxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkfluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
