import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishRowComponent } from './fish-row.component';

describe('FishRowComponent', () => {
  let component: FishRowComponent;
  let fixture: ComponentFixture<FishRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishRowComponent]
    });
    fixture = TestBed.createComponent(FishRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
