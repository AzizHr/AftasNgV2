import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import * as FishActions from "../../../../store/actions/fish.actions";
import {FishRequest} from "../../../../models/request/fish-request.models";
import {Observable} from "rxjs";
import {LevelResponse} from "../../../../models/response/level-response.models";
import {errorSelector, isLoadingSelector, levelsSelector} from "../../../../store/selectors/level.selectors";
import {loadLevels} from "../../../../store/actions/level.actions";


@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrls: ['./add-fish.component.css']
})
export class AddFishComponent implements OnInit{

  isLoading$: Observable<boolean>;
  levels$: Observable<any>;
  error$: Observable<string | null>;
  levels: LevelResponse[] = [];
  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.levels$ = this.store.pipe(select(levelsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(loadLevels());
    this.levels$.subscribe((levels) => {
      this.levels = levels;
    })
  }

  fishForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    averageWeight: [0, [Validators.required]],
    levelCode: [null , Validators.required],
  });


  onSubmit() {
    const fishRequest: FishRequest = {
      name: this.fishForm.value.name,
      averageWeight: this.fishForm.value.averageWeight,
      levelCode: this.fishForm.value.levelCode
    }

    console.log(this.fishForm.value)
    this.store.dispatch(FishActions.addFish({ fishRequest: fishRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.fishForm.get(field)?.hasError(errorType) &&
      (this.fishForm.get(field)?.dirty ||
        this.fishForm.get(field)?.touched || this.isSubmitted);
  }

}
