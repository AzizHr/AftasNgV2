import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {CompetitionRequest} from "../../../../models/request/competition-request.models";
import * as CompetitionActions from '../../../../store/actions/competition.actions';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.css']
})
export class AddCompetitionComponent {

  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {}

  competitionForm = this.formBuilder.group({
    code: ['', [Validators.required]],
    date: ['', [Validators.required]],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    location: ['', [Validators.required]]
  });

  onSubmit() {
    const competitionRequest: CompetitionRequest = {
      code: this.competitionForm.value.code,
      date: this.competitionForm.value.date,
      startTime: this.competitionForm.value.startTime,
      endTime: this.competitionForm.value.endTime,
      location: this.competitionForm.value.location,
    }

    this.store.dispatch(CompetitionActions.addCompetition({ competitionRequest: competitionRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.competitionForm.get(field)?.hasError(errorType) &&
      (this.competitionForm.get(field)?.dirty ||
        this.competitionForm.get(field)?.touched || this.isSubmitted);
  }

}
