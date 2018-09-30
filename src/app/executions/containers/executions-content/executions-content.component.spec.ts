import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionsContentComponent } from './executions-content.component';

describe('ExecutionsContentComponent', () => {
  let component: ExecutionsContentComponent;
  let fixture: ComponentFixture<ExecutionsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
