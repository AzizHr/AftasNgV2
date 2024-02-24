import {CompetitionRequest} from "../request/competition-request.models";
import {UserResponse} from "./user-response.models";
import {FishResponse} from "./fish-response.models";

export interface HuntingResponse {
  id: number;
  numberOfFish: number;
  competition: CompetitionRequest;
  member: UserResponse;
  fish: FishResponse;
}
