import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLevelComponent } from './add-level.component';

describe('AddLevelComponent', () => {
  let component: AddLevelComponent;
  let fixture: ComponentFixture<AddLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLevelComponent]
    });
    fixture = TestBed.createComponent(AddLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
