import { createAction, props } from '@ngrx/store';
import {RankingResponse} from "../../models/response/ranking-response.models";
import {RankingRequest} from "../../models/request/ranking-request.models";

export const loadRankings = createAction("[Ranking] Load Rankings");
export const loadRankingsSuccess = createAction("[Ranking] Load Rankings Success", props<{ rankings: RankingResponse[] }>());
export const loadRankingsFailure = createAction("[Ranking] Load Rankings Failure", props<{ error: string }>());

export const loadTop3Rankings = createAction("[Ranking] Load Top 3 Rankings", props<{ competitionCode: string }>());
export const loadTop3RankingsSuccess = createAction("[Ranking] Load Top 3 Rankings Success", props<{ rankings: RankingResponse[] }>());
export const loadTop3RankingsFailure = createAction("[Ranking] Load Top 3 Rankings Failure", props<{ error: string }>());

export const addRanking = createAction("[Ranking] Add Ranking", props<{ rankingRequest: RankingRequest }>());
export const addRankingSuccess = createAction("[Ranking] Add Ranking Success", props<{ rankingResponse: RankingResponse }>());
export const addRankingFailure = createAction("[Ranking] Add Ranking Failure", props<{ error: string }>());

export const updateRanking = createAction("[Ranking] Update Ranking", props<{ rankingRequest: RankingRequest, id: number }>());
export const updateRankingSuccess = createAction("[Ranking] Update Ranking Success", props<{ rankingResponse: RankingResponse }>());
export const updateRankingFailure = createAction("[Ranking] Update Ranking Failure", props<{ error: string }>());

export const deleteRanking = createAction("[Ranking] Delete Ranking", props<{ id: number }>());
export const deleteRankingSuccess = createAction("[Ranking] Delete Ranking Success", props<{ id: number, message: string }>());
export const deleteRankingFailure = createAction("[Ranking] Delete Ranking Failure", props<{ error: string }>());

