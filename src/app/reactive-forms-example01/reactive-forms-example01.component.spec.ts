import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsExample01Component } from './reactive-forms-example01.component';

describe('ReactiveFormsExample01Component', () => {
  let component: ReactiveFormsExample01Component;
  let fixture: ComponentFixture<ReactiveFormsExample01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsExample01Component]
    });
    fixture = TestBed.createComponent(ReactiveFormsExample01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
