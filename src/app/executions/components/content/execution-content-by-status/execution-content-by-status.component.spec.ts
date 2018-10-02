import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionContentByStatusComponent } from './execution-content-by-status.component';

describe('ExecutionContentByStatusComponent', () => {
  let component: ExecutionContentByStatusComponent;
  let fixture: ComponentFixture<ExecutionContentByStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionContentByStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionContentByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
