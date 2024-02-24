import { createAction, props } from '@ngrx/store';
import {FishResponse} from "../../models/response/fish-response.models";
import {FishRequest} from "../../models/request/fish-request.models";

export const loadFishList = createAction("[Fish] Load FishList");
export const loadFishListSuccess = createAction("[Fish] Load FishList Success", props<{ fishList: FishResponse[] }>());
export const loadFishListFailure = createAction("[Fish] Load FishList Failure", props<{ error: string }>());

export const addFish = createAction("[Fish] Add Fish", props<{ fishRequest: FishRequest }>());
export const addFishSuccess = createAction("[Fish] Add Fish Success", props<{ fishResponse: FishResponse }>());
export const addFishFailure = createAction("[Fish] Add Fish Failure", props<{ error: string }>());

export const updateFish = createAction("[Fish] Update Fish", props<{ fishRequest: FishRequest, name: string }>());
export const updateFishSuccess = createAction("[Fish] Update Fish Success", props<{ fishResponse: FishResponse }>());
export const updateFishFailure = createAction("[Fish] Update Fish Failure", props<{ error: string }>());

export const deleteFish = createAction("[Fish] Delete Fish", props<{ name: string }>());
export const deleteFishSuccess = createAction("[Fish] Delete Fish Success", props<{ name: string, message: string }>());
export const deleteFishFailure = createAction("[Fish] Delete Fish Failure", props<{ error: string }>());

