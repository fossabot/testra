import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionAutoRefreshComponent } from './execution-auto-refresh.component';

describe('ExecutionAutoRefreshComponent', () => {
  let component: ExecutionAutoRefreshComponent;
  let fixture: ComponentFixture<ExecutionAutoRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionAutoRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionAutoRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
