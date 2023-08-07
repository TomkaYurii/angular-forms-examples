import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TddExample03Component } from './tdd-example03.component';

describe('TddExample03Component', () => {
  let component: TddExample03Component;
  let fixture: ComponentFixture<TddExample03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TddExample03Component]
    });
    fixture = TestBed.createComponent(TddExample03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
