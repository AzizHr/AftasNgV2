import {CompetitionRequest} from "../request/competition-request.models";
import {UserResponse} from "./user-response.models";

export interface RankingResponse {
  id: number;
  competition: CompetitionRequest;
  member: UserResponse;
  rank: number;
  score: number;
}
