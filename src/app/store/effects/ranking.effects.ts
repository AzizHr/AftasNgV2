import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as RankingActions from '../actions/ranking.actions';
import {Router} from "@angular/router";
import {RankingService} from "../../services/ranking/ranking.service";

@Injectable()
export class RankingEffects {
  constructor(private actions$: Actions, private rankingService: RankingService, private router: Router) {}

  loadRankings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RankingActions.loadRankings),
      mergeMap((action) =>
        this.rankingService.getAll().pipe(
          map((rankings) => RankingActions.loadRankingsSuccess({ rankings })),
          catchError((error) => of(RankingActions.loadRankingsFailure({ error: error.message })))
        )
      )
    )
  );

  loadTop3Rankings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RankingActions.loadTop3Rankings),
      mergeMap((action) =>
        this.rankingService.getTop3(action.competitionCode).pipe(
          map((rankings) => RankingActions.loadTop3RankingsSuccess({ rankings })),
          catchError((error) => of(RankingActions.loadTop3RankingsFailure({ error: error.message })))
        )
      )
    )
  );

  addRanking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RankingActions.addRanking),
      mergeMap((action) =>
        this.rankingService.save(action.rankingRequest).pipe(
          map((rankingResponse) =>
            {
              this.router.navigateByUrl('/my-articles');
              return RankingActions.addRankingSuccess({ rankingResponse })
            },
            catchError((error) => of(RankingActions.addRankingFailure({ error: error.message })))
          )
        )
      )
    ));

  updateRanking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RankingActions.updateRanking),
      mergeMap((action) =>
        this.rankingService.update(action.rankingRequest, action.id).pipe(
          map((rankingResponse) =>
            {
              this.router.navigateByUrl('/my-articles');
              return RankingActions.updateRankingSuccess({ rankingResponse })
            },
            catchError((error) => of(RankingActions.updateRankingFailure({ error: error.message })))
          )
        )
      )
    ));

  deleteRanking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RankingActions.deleteRanking),
      mergeMap((action) =>
        this.rankingService.delete(action.id).pipe(
          map((message) => RankingActions.deleteRankingSuccess({ id: action.id, message: message })),
          catchError((error) => of(RankingActions.deleteRankingFailure({ error: error.message })))
        )
      )
    )
  );

}
