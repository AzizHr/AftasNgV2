import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.competitions;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const competitionsSelector = createSelector(selectFeature, (state) => state.competitions);
export const competitionSelector = createSelector(selectFeature, (state) => state.selectedCompetition);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
