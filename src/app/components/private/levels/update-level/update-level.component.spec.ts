import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLevelComponent } from './update-level.component';

describe('UpdateLevelComponent', () => {
  let component: UpdateLevelComponent;
  let fixture: ComponentFixture<UpdateLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLevelComponent]
    });
    fixture = TestBed.createComponent(UpdateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
