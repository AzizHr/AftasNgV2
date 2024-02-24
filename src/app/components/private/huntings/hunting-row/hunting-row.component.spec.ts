import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingRowComponent } from './hunting-row.component';

describe('HuntingRowComponent', () => {
  let component: HuntingRowComponent;
  let fixture: ComponentFixture<HuntingRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuntingRowComponent]
    });
    fixture = TestBed.createComponent(HuntingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
