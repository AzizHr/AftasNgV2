import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import * as FishActions from "../../../store/actions/fish.actions";
import {FishResponse} from "../../../models/response/fish-response.models";
import {errorSelector, fishListSelector, isLoadingSelector} from "../../../store/selectors/fish.selectors";

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent {

  isLoading$: Observable<boolean>;
  fishList$: Observable<any>;
  error$: Observable<string | null>;
  fishList: FishResponse[] = [];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.fishList$ = this.store.pipe(select(fishListSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all();
  }

  all() {
    this.store.dispatch(FishActions.loadFishList());
    this.fishList$.subscribe(fishList => {
      this.fishList = fishList;
    });
  }

}
