import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectResultsOverallChartComponent } from './project-results-overall-chart.component';

describe('ProjectResultsOverallChartComponent', () => {
  let component: ProjectResultsOverallChartComponent;
  let fixture: ComponentFixture<ProjectResultsOverallChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectResultsOverallChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectResultsOverallChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
