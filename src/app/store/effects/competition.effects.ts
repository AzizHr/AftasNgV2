import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CompetitionActions from '../actions/competition.actions';
import {Router} from "@angular/router";
import {CompetitionService} from "../../services/competition/competition.service";
import Swal from "sweetalert2";

@Injectable()
export class CompetitionEffects {
  constructor(private actions$: Actions, private competitionService: CompetitionService, private router: Router) {}

  loadCompetitions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompetitionActions.loadCompetitions),
      mergeMap((action) =>
        this.competitionService.getAll(action.page, action.size).pipe(
          map((competitions) => CompetitionActions.loadCompetitionsSuccess({ competitions })),
          catchError((error) => of(CompetitionActions.loadCompetitionsFailure({ error: error.message })))
        )
      )
    )
  );

  loadCompetition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompetitionActions.loadCompetition),
      mergeMap((action) =>
        this.competitionService.getCompetition(action.code).pipe(
          map((competitionResponse) => CompetitionActions.loadCompetitionSuccess({ competitionResponse })),
          catchError((error) => of(CompetitionActions.loadCompetitionFailure({ error: error.message })))
        )
      )
    )
  );

  addCompetition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompetitionActions.addCompetition),
      mergeMap((action) =>
        this.competitionService.save(action.competitionRequest).pipe(
          map((competitionResponse) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New competition created with success',
              showConfirmButton: false,
              timer: 1500
            });
            console.log(competitionResponse);
            return CompetitionActions.addCompetitionSuccess({ competitionResponse });
          }),
          catchError((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message
            });
            return of(CompetitionActions.addCompetitionFailure({ error: error.error.message }));
          })
        )
      )
    )
  );

  updateCompetition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompetitionActions.updateCompetition),
      mergeMap((action) =>
        this.competitionService.update(action.competitionRequest, action.code).pipe(
          map((competitionResponse) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Competition updated with success',
              showConfirmButton: false,
              timer: 1500
            });
            return CompetitionActions.updateCompetitionSuccess({ competitionResponse });
          }),
          catchError((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message
            });
            return of(CompetitionActions.updateCompetitionFailure({ error: error.error.message }));
          })
        )
      )
    )
  );

  deleteCompetition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompetitionActions.deleteCompetition),
      mergeMap((action) =>
        this.competitionService.delete(action.code).pipe(
          map((message) => CompetitionActions.deleteCompetitionSuccess({ code: action.code, message: message })),
          catchError((error) => of(CompetitionActions.deleteCompetitionFailure({ error: error.message })))
        )
      )
    )
  );

}
