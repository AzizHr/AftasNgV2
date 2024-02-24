import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.huntings;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const huntingsSelector = createSelector(selectFeature, (state) => state.huntings);
export const huntingSelector = createSelector(selectFeature, (state) => state.selectedHunting);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
