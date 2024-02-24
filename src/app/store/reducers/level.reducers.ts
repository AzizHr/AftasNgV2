import * as LevelActions from '../actions/level.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/level.state";

export const levelReducer = createReducer(
  initialState,
  // Load Levels
  on(LevelActions.loadLevels, (state) => ({ ...state, isLoading: true })),
  on(LevelActions.loadLevelsSuccess, (state, action) => ({ ...state, isLoading: false, levels: action.levels })),
  on(LevelActions.loadLevelsFailure, (state, action) => ({ ...state, error: action.error })),

  // Add Level
  on(LevelActions.addLevel, (state) => ({ ...state, isLoading: true })),
  on(LevelActions.addLevelSuccess, (state, action) => ({ ...state, isLoading: false, selectedLevel: action.levelResponse })),
  on(LevelActions.addLevelFailure, (state, action) => ({ ...state, error: action.error })),

  // Update Level
  on(LevelActions.updateLevel, (state) => ({ ...state, isLoading: true })),
  on(LevelActions.updateLevelSuccess, (state, action) => ({ ...state, isLoading: false, selectedLevel: action.levelResponse })),
  on(LevelActions.updateLevelFailure, (state, action) => ({ ...state, error: action.error })),

  // Delete Level
  on(LevelActions.deleteLevel, (state) => ({ ...state, isLoading: true })),
  on(LevelActions.deleteLevelSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    levels: state.levels.filter(l => l.code != action.code)
  })),
  on(LevelActions.deleteLevelFailure, (state, action) => ({ ...state, error: action.error })),
);
