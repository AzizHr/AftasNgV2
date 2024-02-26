import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {RankingResponse} from "../../../../models/response/ranking-response.models";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {ActivatedRoute} from "@angular/router";
import {errorSelector, isLoadingSelector, rankingsSelector} from "../../../../store/selectors/ranking.selectors";
import * as RankingActions from "../../../../store/actions/ranking.actions";

@Component({
  selector: 'app-top-3',
  templateUrl: './top-3.component.html',
  styleUrls: ['./top-3.component.css']
})
export class Top3Component {

  isLoading$: Observable<boolean>;
  rankings$: Observable<any>;
  error$: Observable<string | null>;
  rankings: RankingResponse[] = [];
  competitionCode: string = '';

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.rankings$ = this.store.pipe(select(rankingsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.competitionCode = this.route.snapshot.paramMap.get('id');
    this.all();
  }

  all() {
    this.store.dispatch(RankingActions.loadTop3Rankings({ competitionCode: this.competitionCode }));
    this.rankings$.subscribe(rankings => {
      this.rankings = rankings;
    });
  }

}
