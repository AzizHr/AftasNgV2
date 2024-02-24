import * as RankingActions from '../actions/ranking.actions';
import {createReducer, on} from "@ngrx/store";
import {initialState} from "../../state/ranking.state";

export const rankingReducer = createReducer(
  initialState,
  // Load Rankings
  on(RankingActions.loadRankings, (state) => ({ ...state, isLoading: true })),
  on(RankingActions.loadRankingsSuccess, (state, action) => ({ ...state, isLoading: false, rankings: action.rankings })),
  on(RankingActions.loadRankingsFailure, (state, action) => ({ ...state, error: action.error })),

  // Load Top 3 Rankings
  on(RankingActions.loadTop3Rankings, (state) => ({ ...state, isLoading: true })),
  on(RankingActions.loadTop3RankingsSuccess, (state, action) => ({ ...state, isLoading: false, rankings: action.rankings })),
  on(RankingActions.loadTop3RankingsFailure, (state, action) => ({ ...state, error: action.error })),

  // Add Ranking
  on(RankingActions.addRanking, (state) => ({ ...state, isLoading: true })),
  on(RankingActions.addRankingSuccess, (state, action) => ({ ...state, isLoading: false, selectedRanking: action.rankingResponse })),
  on(RankingActions.addRankingFailure, (state, action) => ({ ...state, error: action.error })),

  // Update Ranking
  on(RankingActions.updateRanking, (state) => ({ ...state, isLoading: true })),
  on(RankingActions.updateRankingSuccess, (state, action) => ({ ...state, isLoading: false, selectedRanking: action.rankingResponse })),
  on(RankingActions.updateRankingFailure, (state, action) => ({ ...state, error: action.error })),

  // Delete Ranking
  on(RankingActions.deleteRanking, (state) => ({ ...state, isLoading: true })),
  on(RankingActions.deleteRankingSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    rankings: state.rankings.filter(r => r.id != action.id)
  })),
  on(RankingActions.deleteRankingFailure, (state, action) => ({ ...state, error: action.error })),
);
