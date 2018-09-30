import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecentExecutionsListComponent} from './recent-executions-list.component';

describe('TopProjectsListComponent', () => {
  let component: RecentExecutionsListComponent;
  let fixture: ComponentFixture<RecentExecutionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecentExecutionsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentExecutionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
