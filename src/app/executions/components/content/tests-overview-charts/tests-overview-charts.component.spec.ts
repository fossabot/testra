import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsOverviewChartsComponent } from './tests-overview-charts.component';

describe('TestsOverviewChartsComponent', () => {
  let component: TestsOverviewChartsComponent;
  let fixture: ComponentFixture<TestsOverviewChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsOverviewChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsOverviewChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
