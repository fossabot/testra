import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectCountersComponent} from './project-counters.component';

describe('ProjectCountersComponent', () => {
  let component: ProjectCountersComponent;
  let fixture: ComponentFixture<ProjectCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCountersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
