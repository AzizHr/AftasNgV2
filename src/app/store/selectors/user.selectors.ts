import { createSelector } from '@ngrx/store';
import {AppState} from "../../state/app.state";

export const selectFeature = (state: AppState) => state.users;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const usersSelector = createSelector(selectFeature, (state) => state.users);
export const userSelector = createSelector(selectFeature, (state) => state.selectedUser);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
