import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHuntingComponent } from './update-hunting.component';

describe('UpdateHuntingComponent', () => {
  let component: UpdateHuntingComponent;
  let fixture: ComponentFixture<UpdateHuntingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHuntingComponent]
    });
    fixture = TestBed.createComponent(UpdateHuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
