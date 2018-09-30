import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopProjectsListComponent} from './top-projects-list.component';

describe('TopProjectsListComponent', () => {
  let component: TopProjectsListComponent;
  let fixture: ComponentFixture<TopProjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopProjectsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
