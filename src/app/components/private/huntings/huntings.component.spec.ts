import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingsComponent } from './huntings.component';

describe('HuntingsComponent', () => {
  let component: HuntingsComponent;
  let fixture: ComponentFixture<HuntingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuntingsComponent]
    });
    fixture = TestBed.createComponent(HuntingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
