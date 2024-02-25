import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Router} from "@angular/router";
import * as UserActions from "../../../store/actions/user.actions";
import {UserResponse} from "../../../models/response/user-response.models";
import {errorSelector, isLoadingSelector, usersSelector} from "../../../store/selectors/user.selectors";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  isLoading$: Observable<boolean>;
  users$: Observable<any>;
  error$: Observable<string | null>;
  users: UserResponse[] = [];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.users$ = this.store.pipe(select(usersSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all();
  }

  all() {
    this.store.dispatch(UserActions.loadUsers());
    this.users$.subscribe(users => {
      this.users = users;
    });
  }

}
