import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsExample02Component } from './reactive-forms-example02.component';

describe('ReactiveFormsExample02Component', () => {
  let component: ReactiveFormsExample02Component;
  let fixture: ComponentFixture<ReactiveFormsExample02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsExample02Component]
    });
    fixture = TestBed.createComponent(ReactiveFormsExample02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
