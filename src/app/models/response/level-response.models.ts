import {FishRequest} from "../request/fish-request.models";

export interface LevelResponse {
  code: number;
  description: string;
  points: number;
  fish: FishRequest[];
}
