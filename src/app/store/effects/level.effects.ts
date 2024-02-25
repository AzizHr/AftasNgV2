import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as LevelActions from '../actions/level.actions';
import {Router} from "@angular/router";
import {LevelService} from "../../services/level/level.service";
import Swal from "sweetalert2";

@Injectable()
export class LevelEffects {
  constructor(private actions$: Actions, private levelService: LevelService, private router: Router) {}

  loadLevels$ = createEffect(() =>
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

  addLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LevelActions.addLevel),
      mergeMap((action) =>
        this.levelService.save(action.levelRequest).pipe(
          map((levelResponse) =>
            {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'New level created with success',
                showConfirmButton: false,
                timer: 1500
              });
              return LevelActions.addLevelSuccess({ levelResponse })
            },
            catchError((error) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.error.message
              });
              return of(LevelActions.addLevelFailure({ error: error.error.message }));
            })
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
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Level updated with success',
                showConfirmButton: false,
                timer: 1500
              });
              return LevelActions.updateLevelSuccess({ levelResponse })
            },
            catchError((error) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.error.message
              });
              return of(LevelActions.updateLevelFailure({ error: error.error.message }));
            }
          )
        )
      )
    )));

  deleteLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LevelActions.deleteLevel),
      mergeMap((action) =>
        this.levelService.delete(action.code).pipe(
          map((message) => LevelActions.deleteLevelSuccess({ code: action.code, message: message })),
          catchError((error) => of(LevelActions.deleteLevelFailure({ error: error.message })))
        )
      )
    )
  );

}
