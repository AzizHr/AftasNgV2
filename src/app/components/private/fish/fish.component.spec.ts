import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishComponent } from './fish.component';

describe('FishComponent', () => {
  let component: FishComponent;
  let fixture: ComponentFixture<FishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishComponent]
    });
    fixture = TestBed.createComponent(FishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
