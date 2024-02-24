import { createAction, props } from '@ngrx/store';
import {LevelResponse} from "../../models/response/level-response.models";
import {LevelRequest} from "../../models/request/level-request.models";
import {UserState} from "../../state/user.state";
import {UserResponse} from "../../models/response/user-response.models";
import {UserNumAndRole} from "../../models/request/user-num-and-role.models";

export const loadUsers = createAction("[User] Load Users");
export const loadUsersSuccess = createAction("[User] Load Users Success", props<{ users: UserResponse[] }>());
export const loadUsersFailure = createAction("[User] Load Users Failure", props<{ error: string }>());

export const activateUserAccount = createAction("[User] Activate User", props<{ userNum: number }>());
export const activateUserAccountSuccess = createAction("[User] Activate User Success", props<{ user: UserResponse }>());
export const activateUserAccountFailure = createAction("[User] Activate User Failure", props<{ error: string }>());

export const changeUserRole = createAction("[User] Change User Role", props<{ userNumAndRole: UserNumAndRole }>());
export const changeUserRoleSuccess = createAction("[User] Change User Role Success", props<{ user: UserResponse }>());
export const changeUserRoleFailure = createAction("[User] Change User Role Failure", props<{ error: string }>());
