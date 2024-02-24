import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import * as RankingActions from "../../../store/actions/ranking.actions";
import {RankingResponse} from "../../../models/response/ranking-response.models";
import {errorSelector, isLoadingSelector, rankingsSelector} from "../../../store/selectors/ranking.selectors";

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent {

  isLoading$: Observable<boolean>;
  rankings$: Observable<any>;
  error$: Observable<string | null>;
  rankings: RankingResponse[] = [];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.rankings$ = this.store.pipe(select(rankingsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all();
  }

  all() {
    this.store.dispatch(RankingActions.loadRankings());
    this.rankings$.subscribe(rankings => {
      this.rankings = rankings;
    });
  }

}
