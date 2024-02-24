import { createAction, props } from '@ngrx/store';
import {LevelResponse} from "../../models/response/level-response.models";
import {LevelRequest} from "../../models/request/level-request.models";

export const loadLevels = createAction("[Level] Load Levels");
export const loadLevelsSuccess = createAction("[Level] Load Levels Success", props<{ levels: LevelResponse[] }>());
export const loadLevelsFailure = createAction("[Level] Load Levels Failure", props<{ error: string }>());

export const addLevel = createAction("[Level] Add Level", props<{ levelRequest: LevelRequest }>());
export const addLevelSuccess = createAction("[Level] Add Level Success", props<{ levelResponse: LevelResponse }>());
export const addLevelFailure = createAction("[Level] Add Level Failure", props<{ error: string }>());

export const updateLevel = createAction("[Level] Update Level", props<{ levelRequest: LevelRequest, code: number }>());
export const updateLevelSuccess = createAction("[Level] Update Level Success", props<{ levelResponse: LevelResponse }>());
export const updateLevelFailure = createAction("[Level] Update Level Failure", props<{ error: string }>());

export const deleteLevel = createAction("[Level] Delete Level", props<{ code: number }>());
export const deleteLevelSuccess = createAction("[Level] Delete Level Success", props<{ code: number, message: string }>());
export const deleteLevelFailure = createAction("[Level] Delete Level Failure", props<{ error: string }>());

