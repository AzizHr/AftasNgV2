import {CompetitionResponse} from "../models/response/competition-response.models";

export interface CompetitionState {
  isLoading: boolean;
  competitions: CompetitionResponse[];
  selectedCompetition: any;
  error: string | null;
}

export const initialState: CompetitionState = {
  isLoading: false,
  competitions: [],
  selectedCompetition: {},
  error: null
};
