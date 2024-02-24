import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as HuntingActions from '../actions/hunting.actions';
import {Router} from "@angular/router";
import {HuntingService} from "../../services/hunting/hunting.service";

@Injectable()
export class HuntingEffects {
  constructor(private actions$: Actions, private huntingService: HuntingService, private router: Router) {}

  loadHuntings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HuntingActions.loadHuntings),
      mergeMap((action) =>
        this.huntingService.getAll().pipe(
          map((huntings) => HuntingActions.loadHuntingsSuccess({ huntings })),
          catchError((error) => of(HuntingActions.loadHuntingsFailure({ error: error.message })))
        )
      )
    )
  );

  addHunting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HuntingActions.addHunting),
      mergeMap((action) =>
        this.huntingService.save(action.huntingRequest).pipe(
          map((huntingResponse) =>
            {
              this.router.navigateByUrl('/my-articles');
              return HuntingActions.addHuntingSuccess({ huntingResponse })
            },
            catchError((error) => of(HuntingActions.addHuntingFailure({ error: error.message })))
          )
        )
      )
    ));

  updateHunting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HuntingActions.updateHunting),
      mergeMap((action) =>
        this.huntingService.update(action.huntingRequest, action.id).pipe(
          map((huntingResponse) =>
            {
              this.router.navigateByUrl('/my-articles');
              return HuntingActions.updateHuntingSuccess({ huntingResponse })
            },
            catchError((error) => of(HuntingActions.updateHuntingFailure({ error: error.message })))
          )
        )
      )
    ));

  deleteHunting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HuntingActions.deleteHunting),
      mergeMap((action) =>
        this.huntingService.delete(action.id).pipe(
          map((message) => HuntingActions.deleteHuntingSuccess({ id: action.id, message: message })),
          catchError((error) => of(HuntingActions.deleteHuntingFailure({ error: error.message })))
        )
      )
    )
  );

}
