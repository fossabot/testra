import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExecutionsSidebarComponent} from './executions-sidebar.component';

describe('ExecutionsSidebarComponent', () => {
  let component: ExecutionsSidebarComponent;
  let fixture: ComponentFixture<ExecutionsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutionsSidebarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
