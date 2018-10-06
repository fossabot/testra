import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GherkinCardComponent } from './gherkin-card.component';

describe('GherkinCardComponent', () => {
  let component: GherkinCardComponent;
  let fixture: ComponentFixture<GherkinCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GherkinCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GherkinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
