import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingRowComponent } from './ranking-row.component';

describe('RankingRowComponent', () => {
  let component: RankingRowComponent;
  let fixture: ComponentFixture<RankingRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankingRowComponent]
    });
    fixture = TestBed.createComponent(RankingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
