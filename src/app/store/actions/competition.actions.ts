import { createAction, props } from '@ngrx/store';
import {CompetitionResponse} from "../../models/response/competition-response.models";
import {CompetitionRequest} from "../../models/request/competition-request.models";

export const loadCompetitions = createAction("[Competition] Load Competitions", props<{ page: number, size: number }>());
export const loadCompetitionsSuccess = createAction("[Competition] Load Competitions Success", props<{ competitions: CompetitionResponse[] }>());
export const loadCompetitionsFailure = createAction("[Competition] Load Competitions Failure", props<{ error: string }>());

export const addCompetition = createAction("[Competition] Add Competition", props<{ competitionRequest: CompetitionRequest }>());
export const addCompetitionSuccess = createAction("[Competition] Add Competition Success", props<{ competitionResponse: CompetitionResponse }>());
export const addCompetitionFailure = createAction("[Competition] Add Competition Failure", props<{ error: string }>());

export const updateCompetition = createAction("[Competition] Update Competition", props<{ competitionRequest: CompetitionRequest, code: string  }>());
export const updateCompetitionSuccess = createAction("[Competition] Update Competition Success", props<{ competitionResponse: CompetitionResponse }>());
export const updateCompetitionFailure = createAction("[Competition] Update Competition Failure", props<{ error: string }>());

export const deleteCompetition = createAction("[Competition] Delete Competition", props<{ code: string }>());
export const deleteCompetitionSuccess = createAction("[Competition] Delete Competition Success", props<{ code: string, message: string }>());
export const deleteCompetitionFailure = createAction("[Competition] Delete Competition Failure", props<{ error: string }>());

export const loadCompetition = createAction("[Competition] Load Competition", props<{ code: string }>());
export const loadCompetitionSuccess = createAction("[Competition] Load Competition Success", props<{ competitionResponse: CompetitionResponse }>());
export const loadCompetitionFailure = createAction("[Competition] Load Competition Failure", props<{ error: string }>());

