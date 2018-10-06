import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGroupsListComponent } from './test-groups-list.component';

describe('TestGroupsListComponent', () => {
  let component: TestGroupsListComponent;
  let fixture: ComponentFixture<TestGroupsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGroupsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
