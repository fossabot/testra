import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionContentHeaderComponent } from './execution-content-header.component';

describe('ExecutionContentHeaderComponent', () => {
  let component: ExecutionContentHeaderComponent;
  let fixture: ComponentFixture<ExecutionContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionContentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
