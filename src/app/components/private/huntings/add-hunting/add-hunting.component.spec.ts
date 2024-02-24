import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHuntingComponent } from './add-hunting.component';

describe('AddHuntingComponent', () => {
  let component: AddHuntingComponent;
  let fixture: ComponentFixture<AddHuntingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHuntingComponent]
    });
    fixture = TestBed.createComponent(AddHuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
