import {CompetitionState} from "./competition.state";
import {FishState} from "./fish.state";
import {HuntingState} from "./hunting.state";
import {LevelState} from "./level.state";
import {RankingState} from "./ranking.state";
import {UserState} from "./user.state";

export interface AppState {
  competitions: CompetitionState,
  fishList: FishState,
  huntings: HuntingState,
  levels: LevelState,
  rankings: RankingState,
  users: UserState
}
