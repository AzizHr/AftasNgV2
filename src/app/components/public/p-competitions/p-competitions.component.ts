import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {CompetitionResponse} from "../../../models/response/competition-response.models";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import {competitionsSelector, errorSelector, isLoadingSelector} from "../../../store/selectors/competition.selectors";
import * as CompetitionActions from "../../../store/actions/competition.actions";

@Component({
  selector: 'app-p-competitions',
  templateUrl: './p-competitions.component.html',
  styleUrls: ['./p-competitions.component.css']
})
export class PCompetitionsComponent {

  isLoading$: Observable<boolean>;
  competitions$: Observable<any>;
  error$: Observable<string | null>;
  competitions: CompetitionResponse[] = [];

  currentPage: number = 0;
  totalElements: number = 0;
  limit: number = 3;
  totalPages: number = 0;
  pages: number[];

  selectedFilter: string = 'All';

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.competitions$ = this.store.pipe(select(competitionsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all(this.currentPage, this.limit);
  }

  all(p: number, s: number) {
    this.store.dispatch(CompetitionActions.loadCompetitions({ page: p, size: s }));
    this.competitions$.subscribe(data => {
      this.competitions = data.content;
      this.totalElements = data.totalElements;
      this.totalPages = Math.ceil(this.totalElements / this.limit);
      this.pages = [...Array(this.totalPages).keys()];
    });
  }

  isFirstPage(): boolean {
    return this.currentPage === 0;
  }

  isLastPage(): boolean {
    return this.currentPage === this.totalPages - 1;
  }

  onPageChange(event: any) {
    const page = event.page;
    const pageSize = event.rows;
    this.currentPage = page;
    this.all(page, pageSize);
  }

}
