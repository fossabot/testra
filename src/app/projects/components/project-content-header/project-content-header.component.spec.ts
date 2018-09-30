import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContentHeaderComponent } from './project-content-header.component';

describe('ProjectContentHeaderComponent', () => {
  let component: ProjectContentHeaderComponent;
  let fixture: ComponentFixture<ProjectContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectContentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
