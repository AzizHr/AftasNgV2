import {FishResponse} from "../models/response/fish-response.models";

export interface FishState {
  isLoading: boolean;
  fishList: FishResponse[];
  selectedFish: any;
  error: string | null;
}

export const initialState: FishState = {
  isLoading: false,
  fishList: [],
  selectedFish: {},
  error: null
};
