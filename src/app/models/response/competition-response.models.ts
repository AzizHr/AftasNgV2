import {HuntingRequest} from "../request/hunting-request.models";
import {RankingRequest} from "../request/ranking-request.models";

export interface CompetitionResponse {
  code: string;
  date: string;
  startTime: string;
  endTime: string;
  numberOfParticipants: number;
  location: string;
  huntings: HuntingRequest[];
  rankings: RankingRequest[];
}
