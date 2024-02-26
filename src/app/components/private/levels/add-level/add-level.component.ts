import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import * as LevelActions from "../../../../store/actions/level.actions";
import {LevelRequest} from "../../../../models/request/level-request.models";

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent {

  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {}

  levelForm = this.formBuilder.group({
    description: ['', [Validators.required]],
    points: [0, [Validators.required]]
  });


  onSubmit() {
    const levelRequest: LevelRequest = {
      description: this.levelForm.value.description,
      points: this.levelForm.value.points
    }

    this.store.dispatch(LevelActions.addLevel({ levelRequest: levelRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.levelForm.get(field)?.hasError(errorType) &&
      (this.levelForm.get(field)?.dirty ||
        this.levelForm.get(field)?.touched || this.isSubmitted);
  }

}
