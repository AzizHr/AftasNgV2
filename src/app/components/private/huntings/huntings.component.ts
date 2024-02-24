import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import * as HuntingActions from "../../../store/actions/hunting.actions";
import {HuntingResponse} from "../../../models/response/hunting-response.models";
import {errorSelector, huntingsSelector, isLoadingSelector} from "../../../store/selectors/hunting.selectors";

@Component({
  selector: 'app-huntings',
  templateUrl: './huntings.component.html',
  styleUrls: ['./huntings.component.css']
})
export class HuntingsComponent {

  isLoading$: Observable<boolean>;
  huntings$: Observable<any>;
  error$: Observable<string | null>;
  huntings: HuntingResponse[] = [];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.huntings$ = this.store.pipe(select(huntingsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all();
  }

  all() {
    this.store.dispatch(HuntingActions.loadHuntings());
    this.huntings$.subscribe(huntings => {
      this.huntings = huntings;
    });
  }

}
