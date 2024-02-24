import {HuntingResponse} from "../models/response/hunting-response.models";

export interface HuntingState {
  isLoading: boolean;
  huntings: HuntingResponse[];
  selectedHunting: any;
  error: string | null;
}

export const initialState: HuntingState = {
  isLoading: false,
  huntings: [],
  selectedHunting: {},
  error: null
};
