import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionContentPrimaryChartComponent } from './execution-content-primary-chart.component';

describe('ExecutionContentPrimaryChartComponent', () => {
  let component: ExecutionContentPrimaryChartComponent;
  let fixture: ComponentFixture<ExecutionContentPrimaryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionContentPrimaryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionContentPrimaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
