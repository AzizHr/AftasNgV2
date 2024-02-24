import {UserResponse} from "./user-response.models";

export interface AuthResponse {
  user: UserResponse;
  token: string;
}
