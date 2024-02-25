import { createAction, props } from '@ngrx/store';
import {UserResponse} from "../../models/response/user-response.models";
import {UserNumAndRole} from "../../models/request/user-num-and-role.models";
import {UserNum} from "../../models/request/user-num.models";

export const loadUsers = createAction("[User] Load Users");
export const loadUsersSuccess = createAction("[User] Load Users Success", props<{ users: UserResponse[] }>());
export const loadUsersFailure = createAction("[User] Load Users Failure", props<{ error: string }>());

export const toggleUserAccount = createAction("[User] Toggle User Account", props<{ userNum: UserNum }>());
export const toggleUserAccountSuccess = createAction("[User] Toggle User Account Success", props<{ userResponse: UserResponse }>());
export const toggleUserAccountFailure = createAction("[User] Toggle User Account Failure", props<{ error: string }>());

export const changeUserRole = createAction("[User] Change User Role", props<{ userNumAndRole: UserNumAndRole }>());
export const changeUserRoleSuccess = createAction("[User] Change User Role Success", props<{ userResponse: UserResponse }>());
export const changeUserRoleFailure = createAction("[User] Change User Role Failure", props<{ error: string }>());
