import {RankingResponse} from "../models/response/ranking-response.models";

export interface RankingState {
  isLoading: boolean;
  rankings: RankingResponse[];
  selectedRanking: any;
  error: string | null;
}

export const initialState: RankingState = {
  isLoading: false,
  rankings: [],
  selectedRanking: {},
  error: null
};
