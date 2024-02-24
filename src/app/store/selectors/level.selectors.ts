import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.levels;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const levelsSelector = createSelector(selectFeature, (state) => state.levels);
export const levelSelector = createSelector(selectFeature, (state) => state.selectedLevel);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
