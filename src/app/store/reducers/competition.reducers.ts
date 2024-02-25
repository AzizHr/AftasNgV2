import * as CompetitionActions from '../actions/competition.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/competition.state";


// @ts-ignore
export const competitionReducer = createReducer(
  initialState,
  // Load Competitions
  on(CompetitionActions.loadCompetitions, (state) => ({ ...state, isLoading: true })),
  on(CompetitionActions.loadCompetitionsSuccess, (state, action) => ({ ...state, isLoading: false, competitions: action.competitions })),
  on(CompetitionActions.loadCompetitionsFailure, (state, action) => ({ ...state, error: action.error })),

  // Load Competition
  on(CompetitionActions.loadCompetition, (state) => ({ ...state, isLoading: true })),
  on(CompetitionActions.loadCompetitionSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    selectedCompetition: action.competitionResponse
  })),
  on(CompetitionActions.loadCompetitionFailure, (state, action) => ({ ...state, error: action.error })),

  // Add Competition
  on(CompetitionActions.addCompetition, (state) => ({ ...state, isLoading: true })),
  on(CompetitionActions.addCompetitionSuccess, (state, action) => ({ ...state, isLoading: false, selectedCompetition: action.competitionResponse })),
  on(CompetitionActions.addCompetitionFailure, (state, action) => ({ ...state, error: action.error })),

  // Update Competition
  on(CompetitionActions.updateCompetition, (state) => ({ ...state, isLoading: true })),
  on(CompetitionActions.updateCompetitionSuccess, (state, action) => ({ ...state, isLoading: false, selectedCompetition: action.competitionResponse })),
  on(CompetitionActions.updateCompetitionFailure, (state, action) => ({ ...state, error: action.error })),

  // Delete Competition
  on(CompetitionActions.deleteCompetition, (state) => ({ ...state, isLoading: true })),
  on(CompetitionActions.deleteCompetitionSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    competitions: state.competitions.filter(c => c.code != action.code)
  })),
  on(CompetitionActions.deleteCompetitionFailure, (state, action) => ({ ...state, error: action.error })),
);
