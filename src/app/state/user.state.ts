import {UserResponse} from "../models/response/user-response.models";

export interface UserState {
  isLoading: boolean;
  users: UserResponse[];
  selectedUser: any;
  error: string | null;
}

export const initialState: UserState = {
  isLoading: false,
  users: [],
  selectedUser: {},
  error: null
};
