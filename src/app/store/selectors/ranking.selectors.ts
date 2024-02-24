import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.rankings;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const rankingsSelector = createSelector(selectFeature, (state) => state.rankings);
export const rankingSelector = createSelector(selectFeature, (state) => state.selectedRanking);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
