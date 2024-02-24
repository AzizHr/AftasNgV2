import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelRowComponent } from './level-row.component';

describe('LevelRowComponent', () => {
  let component: LevelRowComponent;
  let fixture: ComponentFixture<LevelRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelRowComponent]
    });
    fixture = TestBed.createComponent(LevelRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
