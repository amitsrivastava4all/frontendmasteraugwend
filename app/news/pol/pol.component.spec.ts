import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolComponent } from './pol.component';

describe('PolComponent', () => {
  let component: PolComponent;
  let fixture: ComponentFixture<PolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
