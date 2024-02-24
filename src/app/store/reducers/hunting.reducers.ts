import * as HuntingActions from '../actions/hunting.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/hunting.state";

export const huntingReducer = createReducer(
  initialState,
  // Load Huntings
  on(HuntingActions.loadHuntings, (state) => ({ ...state, isLoading: true })),
  on(HuntingActions.loadHuntingsSuccess, (state, action) => ({ ...state, isLoading: false, huntings: action.huntings })),
  on(HuntingActions.loadHuntingsFailure, (state, action) => ({ ...state, error: action.error })),

  // Add Hunting
  on(HuntingActions.addHunting, (state) => ({ ...state, isLoading: true })),
  on(HuntingActions.addHuntingSuccess, (state, action) => ({ ...state, isLoading: false, selectedHunting: action.huntingResponse })),
  on(HuntingActions.addHuntingFailure, (state, action) => ({ ...state, error: action.error })),

  // Update Hunting
  on(HuntingActions.updateHunting, (state) => ({ ...state, isLoading: true })),
  on(HuntingActions.updateHuntingSuccess, (state, action) => ({ ...state, isLoading: false, selectedHunting: action.huntingResponse })),
  on(HuntingActions.updateHuntingFailure, (state, action) => ({ ...state, error: action.error })),

  // Delete Hunting
  on(HuntingActions.deleteHunting, (state) => ({ ...state, isLoading: true })),
  on(HuntingActions.deleteHuntingSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    huntings: state.huntings.filter(h => h.id != action.id)
  })),
  on(HuntingActions.deleteHuntingFailure, (state, action) => ({ ...state, error: action.error })),
);
