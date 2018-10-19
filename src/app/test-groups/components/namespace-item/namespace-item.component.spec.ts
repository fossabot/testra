import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamespaceItemComponent } from './namespace-item.component';

describe('NamespaceItemComponent', () => {
  let component: NamespaceItemComponent;
  let fixture: ComponentFixture<NamespaceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamespaceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamespaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
