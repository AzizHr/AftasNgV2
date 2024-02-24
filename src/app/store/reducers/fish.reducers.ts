import * as FishActions from '../actions/fish.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/fish.state";

export const fishReducer = createReducer(
  initialState,
  // Load Fish
  on(FishActions.loadFishList, (state) => ({ ...state, isLoading: true })),
  on(FishActions.loadFishListSuccess, (state, action) => ({ ...state, isLoading: false, fishList: action.fishList })),
  on(FishActions.loadFishListFailure, (state, action) => ({ ...state, error: action.error })),

  // Add Fish
  on(FishActions.addFish, (state) => ({ ...state, isLoading: true })),
  on(FishActions.addFishSuccess, (state, action) => ({ ...state, isLoading: false, selectedFish: action.fishResponse })),
  on(FishActions.addFishFailure, (state, action) => ({ ...state, error: action.error })),

  // Update Fish
  on(FishActions.updateFish, (state) => ({ ...state, isLoading: true })),
  on(FishActions.updateFishSuccess, (state, action) => ({ ...state, isLoading: false, selectedFish: action.fishResponse })),
  on(FishActions.updateFishFailure, (state, action) => ({ ...state, error: action.error })),

  // Delete Fish
  on(FishActions.deleteFish, (state) => ({ ...state, isLoading: true })),
  on(FishActions.deleteFishSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    fishList: state.fishList.filter(f => f.name != action.name)
  })),
  on(FishActions.deleteFishFailure, (state, action) => ({ ...state, error: action.error })),
);
