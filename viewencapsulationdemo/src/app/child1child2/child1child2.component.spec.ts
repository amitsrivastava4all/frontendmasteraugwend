import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1child2Component } from './child1child2.component';

describe('Child1child2Component', () => {
  let component: Child1child2Component;
  let fixture: ComponentFixture<Child1child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
