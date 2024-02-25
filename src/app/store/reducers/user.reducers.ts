import * as UserActions from '../actions/user.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/user.state";

export const userReducer = createReducer(
  initialState,
  // Load Users
  on(UserActions.loadUsers, (state) => ({ ...state, isLoading: true })),
  on(UserActions.loadUsersSuccess, (state, action) => ({ ...state, isLoading: false, users: action.users })),
  on(UserActions.loadUsersFailure, (state, action) => ({ ...state, error: action.error })),

  // Activate User Account
  on(UserActions.toggleUserAccount, (state) => ({ ...state, isLoading: true })),
  on(UserActions.toggleUserAccountSuccess, (state, action) => ({ ...state, isLoading: false, selectedUser: action.userResponse })),
  on(UserActions.toggleUserAccountFailure, (state, action) => ({ ...state, error: action.error })),

  // Change User Role
  on(UserActions.changeUserRole, (state) => ({ ...state, isLoading: true })),
  on(UserActions.changeUserRoleSuccess, (state, action) => ({ ...state, isLoading: false, selectedLevel: action.userResponse })),
  on(UserActions.changeUserRoleFailure, (state, action) => ({ ...state, error: action.error })),

);
