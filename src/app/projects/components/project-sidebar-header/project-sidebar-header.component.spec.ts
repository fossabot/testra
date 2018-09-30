import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSidebarHeaderComponent } from './project-sidebar-header.component';

describe('ProjectSidebarHeaderComponent', () => {
  let component: ProjectSidebarHeaderComponent;
  let fixture: ComponentFixture<ProjectSidebarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSidebarHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
