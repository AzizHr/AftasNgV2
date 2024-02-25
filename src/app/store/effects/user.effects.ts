import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import {Router} from "@angular/router";
import {ManagerService} from "../../services/manager/manager.service";
import Swal from "sweetalert2";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private managerService: ManagerService, private router: Router) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap((action) =>
        this.managerService.getAllUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((error) => of(UserActions.loadUsersFailure({ error: error.message })))
        )
      )
    )
  );

  toggleUserAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.toggleUserAccount),
      mergeMap((action) =>
        this.managerService.toggleUserAccount(action.userNum).pipe(
          map((userResponse) =>
            {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${userResponse.activated ? 'User account activated with success' : 'User account dis-activated with success'}`,
                showConfirmButton: false,
                timer: 1500
              });
              return UserActions.toggleUserAccountSuccess({ userResponse })
            },
            catchError((error) => of(UserActions.toggleUserAccountFailure({ error: error.message })))
          )
        )
      )
    ));

  changeUserRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.changeUserRole),
      mergeMap((action) =>
        this.managerService.changeUserRole(action.userNumAndRole).pipe(
          map((userResponse) =>
            {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `User role changed to ${userResponse.role} with success`,
                showConfirmButton: false,
                timer: 1500
              });
              return UserActions.changeUserRoleSuccess({ userResponse })
            },
            catchError((error) => of(UserActions.changeUserRoleFailure({ error: error.message })))
          )
        )
      )
    ));

}
