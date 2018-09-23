import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionItemComponent } from './execution-item.component';

describe('ExecutionItemComponent', () => {
  let component: ExecutionItemComponent;
  let fixture: ComponentFixture<ExecutionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
