import {HuntingResponse} from "../models/response/hunting-response.models";
import {LevelResponse} from "../models/response/level-response.models";

export interface LevelState {
  isLoading: boolean;
  levels: LevelResponse[];
  selectedLevel: any;
  error: string | null;
}

export const initialState: LevelState = {
  isLoading: false,
  levels: [],
  selectedLevel: {},
  error: null
};
