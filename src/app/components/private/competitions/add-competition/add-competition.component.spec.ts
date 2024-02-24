import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitionComponent } from './add-competition.component';

describe('AddCompetitionComponent', () => {
  let component: AddCompetitionComponent;
  let fixture: ComponentFixture<AddCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCompetitionComponent]
    });
    fixture = TestBed.createComponent(AddCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
