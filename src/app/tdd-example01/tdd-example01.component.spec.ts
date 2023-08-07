import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TddExample01Component } from './tdd-example01.component';

describe('TddExample01Component', () => {
  let component: TddExample01Component;
  let fixture: ComponentFixture<TddExample01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TddExample01Component]
    });
    fixture = TestBed.createComponent(TddExample01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
