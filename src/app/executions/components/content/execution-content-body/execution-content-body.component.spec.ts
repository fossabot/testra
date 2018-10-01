import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionContentBodyComponent } from './execution-content-body.component';

describe('ExecutionContentBodyComponent', () => {
  let component: ExecutionContentBodyComponent;
  let fixture: ComponentFixture<ExecutionContentBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionContentBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionContentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
