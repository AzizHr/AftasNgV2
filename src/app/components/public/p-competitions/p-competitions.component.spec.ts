import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCompetitionsComponent } from './p-competitions.component';

describe('PCompetitionsComponent', () => {
  let component: PCompetitionsComponent;
  let fixture: ComponentFixture<PCompetitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PCompetitionsComponent]
    });
    fixture = TestBed.createComponent(PCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
