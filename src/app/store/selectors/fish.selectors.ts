import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.fishList;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const fishListSelector = createSelector(selectFeature, (state) => state.fishList);
export const fishSelector = createSelector(selectFeature, (state) => state.selectedFish);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
