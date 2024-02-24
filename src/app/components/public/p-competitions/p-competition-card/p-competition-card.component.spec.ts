import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCompetitionCardComponent } from './p-competition-card.component';

describe('PCompetitionCardComponent', () => {
  let component: PCompetitionCardComponent;
  let fixture: ComponentFixture<PCompetitionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PCompetitionCardComponent]
    });
    fixture = TestBed.createComponent(PCompetitionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
