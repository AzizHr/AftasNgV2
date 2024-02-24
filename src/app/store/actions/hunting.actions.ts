import { createAction, props } from '@ngrx/store';
import {FishRequest} from "../../models/request/fish-request.models";
import {HuntingResponse} from "../../models/response/hunting-response.models";
import {HuntingRequest} from "../../models/request/hunting-request.models";

export const loadHuntings = createAction("[Hunting] Load Huntings");
export const loadHuntingsSuccess = createAction("[Hunting] Load Huntings Success", props<{ huntings: HuntingResponse[] }>());
export const loadHuntingsFailure = createAction("[Hunting] Load Huntings Failure", props<{ error: string }>());

export const addHunting = createAction("[Hunting] Add Hunting", props<{ huntingRequest: HuntingRequest }>());
export const addHuntingSuccess = createAction("[Hunting] Add Hunting Success", props<{ huntingResponse: HuntingResponse }>());
export const addHuntingFailure = createAction("[Hunting] Add Hunting Failure", props<{ error: string }>());

export const updateHunting = createAction("[Hunting] Update Hunting", props<{ huntingRequest: HuntingRequest, id: number }>());
export const updateHuntingSuccess = createAction("[Hunting] Update Hunting Success", props<{ huntingResponse: HuntingResponse }>());
export const updateHuntingFailure = createAction("[Hunting] Update Hunting Failure", props<{ error: string }>());

export const deleteHunting = createAction("[Hunting] Delete Hunting", props<{ id: number }>());
export const deleteHuntingSuccess = createAction("[Hunting] Delete Hunting Success", props<{ id: number, message: string }>());
export const deleteHuntingFailure = createAction("[Hunting] Delete Hunting Failure", props<{ error: string }>());

