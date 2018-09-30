import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsContentComponent } from './projects-content.component';

describe('ProjectsContentComponent', () => {
  let component: ProjectsContentComponent;
  let fixture: ComponentFixture<ProjectsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
