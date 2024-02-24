import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompetitionComponent } from './update-competition.component';

describe('UpdateCompetitionComponent', () => {
  let component: UpdateCompetitionComponent;
  let fixture: ComponentFixture<UpdateCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCompetitionComponent]
    });
    fixture = TestBed.createComponent(UpdateCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
