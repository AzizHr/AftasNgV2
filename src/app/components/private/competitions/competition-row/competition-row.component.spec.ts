import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionRowComponent } from './competition-row.component';

describe('CompetitionRowComponent', () => {
  let component: CompetitionRowComponent;
  let fixture: ComponentFixture<CompetitionRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitionRowComponent]
    });
    fixture = TestBed.createComponent(CompetitionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
