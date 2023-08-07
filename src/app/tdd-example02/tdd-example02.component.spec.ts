import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TddExample02Component } from './tdd-example02.component';

describe('TddExample02Component', () => {
  let component: TddExample02Component;
  let fixture: ComponentFixture<TddExample02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TddExample02Component]
    });
    fixture = TestBed.createComponent(TddExample02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
