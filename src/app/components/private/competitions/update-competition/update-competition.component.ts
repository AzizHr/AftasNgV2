import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../state/app.state';
import * as CompetitionActions from '../../../../store/actions/competition.actions';
import { competitionSelector, isLoadingSelector } from '../../../../store/selectors/competition.selectors';
import { CompetitionRequest } from '../../../../models/request/competition-request.models';
import { CompetitionResponse } from '../../../../models/response/competition-response.models';

@Component({
  selector: 'app-update-competition',
  templateUrl: './update-competition.component.html',
  styleUrls: ['./update-competition.component.css']
})
export class UpdateCompetitionComponent implements OnInit {

  isSubmitted = false;
  isLoading$: Observable<boolean>;
  competitionCode = '';
  competition: CompetitionResponse;

  competitionForm = this.formBuilder.group({
    code: ['', [Validators.required]],
    date: ['', [Validators.required]],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    location: ['', [Validators.required]]
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  ngOnInit(): void {
    this.competitionCode = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(CompetitionActions.loadCompetition({ code: this.competitionCode }));
    this.store.pipe(select(competitionSelector)).subscribe((competition) => {
      this.competition = competition;
      if (this.competition) {
        this.patchFormValues();
      }
    });
  }

  patchFormValues() {
    this.competitionForm.patchValue({
      code: this.competition.code,
      date: this.competition.date,
      startTime: this.competition.startTime,
      endTime: this.competition.endTime,
      location: this.competition.location
    });
  }

  onSubmit() {
    const competitionRequest: CompetitionRequest = {
      code: this.competitionForm.value.code,
      date: this.competitionForm.value.date,
      startTime: this.competitionForm.value.startTime,
      endTime: this.competitionForm.value.endTime,
      location: this.competitionForm.value.location,
    };

    this.store.dispatch(CompetitionActions.updateCompetition({ competitionRequest: competitionRequest, code: competitionRequest.code }));
    this.isSubmitted = true;
  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.competitionForm.get(field)?.hasError(errorType) &&
      (this.competitionForm.get(field)?.dirty ||
        this.competitionForm.get(field)?.touched || this.isSubmitted);
  }
}
