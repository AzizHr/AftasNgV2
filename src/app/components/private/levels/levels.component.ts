import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import * as LevelActions from "../../../store/actions/level.actions";
import {LevelResponse} from "../../../models/response/level-response.models";
import {errorSelector, isLoadingSelector, levelsSelector} from "../../../store/selectors/level.selectors";

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent {

  isLoading$: Observable<boolean>;
  levels$: Observable<any>;
  error$: Observable<string | null>;
  levels: LevelResponse[] = [];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.levels$ = this.store.pipe(select(levelsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all();
  }

  all() {
    this.store.dispatch(LevelActions.loadLevels());
    this.levels$.subscribe(levels => {
      this.levels = levels;
    });
  }

}
