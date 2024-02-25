import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {CompetitionResponse} from "../../../models/response/competition-response.models";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import {competitionsSelector, errorSelector, isLoadingSelector} from "../../../store/selectors/competition.selectors";
import * as CompetitionActions from '../../../store/actions/competition.actions';
import Swal from "sweetalert2";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent {

  isLoading$: Observable<boolean>;
  competitions$: Observable<any>;
  error$: Observable<string | null>;
  competitions: CompetitionResponse[] = [];

  currentPage: number = 0;
  totalElements: number = 0;
  limit: number = 3;
  totalPages: number = 0;
  pages: number[];

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

  confirmDelete(name: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(name);
      }
    });
  }

  delete(code: string): void {
    this.store.dispatch(CompetitionActions.deleteCompetition({ code: code }));
  }

}
