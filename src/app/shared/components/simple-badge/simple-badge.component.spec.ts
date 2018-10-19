import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBadgeComponent } from './simple-badge.component';

describe('SimpleBadgeComponent', () => {
  let component: SimpleBadgeComponent;
  let fixture: ComponentFixture<SimpleBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
