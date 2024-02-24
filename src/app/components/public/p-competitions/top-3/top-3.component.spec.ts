import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3Component } from './top-3.component';

describe('Top3Component', () => {
  let component: Top3Component;
  let fixture: ComponentFixture<Top3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top3Component]
    });
    fixture = TestBed.createComponent(Top3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
