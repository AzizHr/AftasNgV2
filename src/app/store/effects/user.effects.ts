import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as LevelActions from '../actions/level.actions';
import {Router} from "@angular/router";
import {LevelService} from "../../services/level/level.service";

@Injectable()
export class LevelEffects {
  constructor(private actions$: Actions, private levelService: LevelService, private router: Router) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LevelActions.loadLevels),
      mergeMap((action) =>
        this.levelService.getAll().pipe(
          map((levels) => LevelActions.loadLevelsSuccess({ levels })),
          catchError((error) => of(LevelActions.loadLevelsFailure({ error: error.message })))
        )
      )
    )
  );

  activateUserAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LevelActions.addLevel),
      mergeMap((action) =>
        this.levelService.save(action.levelRequest).pipe(
          map((levelResponse) =>
            {
              this.router.navigateByUrl('/my-articles');
              return LevelActions.addLevelSuccess({ levelResponse })
            },
            catchError((error) => of(LevelActions.addLevelFailure({ error: error.message })))
          )
        )
      )
    ));

  updateLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LevelActions.updateLevel),
      mergeMap((action) =>
        this.levelService.update(action.levelRequest, action.code).pipe(
          map((levelResponse) =>
            {
              this.router.navigateByUrl('/my-articles');
              return LevelActions.updateLevelSuccess({ levelResponse })
            },
            catchError((error) => of(LevelActions.updateLevelFailure({ error: error.message })))
          )
        )
      )
    ));

}
