import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as FishActions from '../actions/fish.actions';
import {Router} from "@angular/router";
import {FishService} from "../../services/fish/fish.service";
import Swal from "sweetalert2";
import * as CompetitionActions from "../actions/competition.actions";

@Injectable()
export class FishEffects {
  constructor(private actions$: Actions, private fishService: FishService, private router: Router) {}

  loadFishList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FishActions.loadFishList),
      mergeMap((action) =>
        this.fishService.getAll().pipe(
          map((fishList) => FishActions.loadFishListSuccess({ fishList })),
          catchError((error) => of(FishActions.loadFishListFailure({ error: error.message })))
        )
      )
    )
  );

  addFish$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FishActions.addFish),
      mergeMap((action) =>
        this.fishService.save(action.fishRequest).pipe(
          map((fishResponse) =>
            {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'New fish created with success',
                showConfirmButton: false,
                timer: 1500
              });
              return FishActions.addFishSuccess({ fishResponse })
            },
            catchError((error) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.error.message
              });
              return of(FishActions.addFishFailure({ error: error.error.message }));
            })
          )
        )
      )
    ));

  updateFish$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FishActions.updateFish),
      mergeMap((action) =>
        this.fishService.update(action.fishRequest, action.name).pipe(
          map((fishResponse) =>
            {
              this.router.navigateByUrl('/my-articles');
              return FishActions.updateFishSuccess({ fishResponse })
            },
            catchError((error) => of(FishActions.updateFishFailure({ error: error.message })))
          )
        )
      )
    ));

  deleteFish$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FishActions.deleteFish),
      mergeMap((action) =>
        this.fishService.delete(action.name).pipe(
          map((message) => FishActions.deleteFishSuccess({ name: action.name, message: message })),
          catchError((error) => of(FishActions.deleteFishFailure({ error: error.message })))
        )
      )
    )
  );

}
