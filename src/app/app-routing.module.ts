import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionsComponent} from "./components/private/competitions/competitions.component";
import {AddCompetitionComponent} from "./components/private/competitions/add-competition/add-competition.component";
import {
  UpdateCompetitionComponent
} from "./components/private/competitions/update-competition/update-competition.component";
import {FishComponent} from "./components/private/fish/fish.component";
import {AddFishComponent} from "./components/private/fish/add-fish/add-fish.component";
import {UpdateFishComponent} from "./components/private/fish/update-fish/update-fish.component";
import {LevelsComponent} from "./components/private/levels/levels.component";
import {AddLevelComponent} from "./components/private/levels/add-level/add-level.component";
import {UpdateLevelComponent} from "./components/private/levels/update-level/update-level.component";
import {RankingsComponent} from "./components/private/rankings/rankings.component";
import {AddRankingComponent} from "./components/private/rankings/add-ranking/add-ranking.component";
import {UpdateRankingComponent} from "./components/private/rankings/update-ranking/update-ranking.component";
import {HuntingsComponent} from "./components/private/huntings/huntings.component";
import {AddHuntingComponent} from "./components/private/huntings/add-hunting/add-hunting.component";
import {UpdateHuntingComponent} from "./components/private/huntings/update-hunting/update-hunting.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {PCompetitionsComponent} from "./components/public/p-competitions/p-competitions.component";
import {Top3Component} from "./components/public/p-competitions/top-3/top-3.component";
import {ManagerAuthGuard} from "./guards/manager-auth.guard";
import {JuryAuthGuard} from "./guards/jury-auth.guard";
import {MemberAuthGuard} from "./guards/member-auth.guard";
import {NoAuthGuard} from "./guards/no-auth.guard";
import {AuthGuard} from "./guards/auth.guard";
import {UsersComponent} from "./components/private/users/users.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "competitions", component: PCompetitionsComponent, canActivate: [AuthGuard] },
  { path: "manager/competitions", component: CompetitionsComponent },
  { path: "manager/competitions/add", component: AddCompetitionComponent },
  { path: "manager/competitions/update/:id", component: UpdateCompetitionComponent },
  { path: "manager/fish-list", component: FishComponent },
  { path: "manager/fish-list/add", component: AddFishComponent },
  { path: "manager/fish-list/update/:id", component: UpdateFishComponent },
  { path: "manager/levels", component: LevelsComponent },
  { path: "manager/levels/add", component: AddLevelComponent },
  { path: "manager/levels/update/:id", component: UpdateLevelComponent },
  { path: "manager/rankings", component: RankingsComponent },
  { path: "manager/rankings/add", component: AddRankingComponent },
  { path: "manager/rankings/update/:id", component: UpdateRankingComponent },
  { path: "manager/huntings", component: HuntingsComponent },
  { path: "manager/huntings/add", component: AddHuntingComponent },
  { path: "manager/huntings/update/:id", component: UpdateHuntingComponent },
  { path: "manager/users", component: UsersComponent },
  { path: "competitions/top-3/:id", component: Top3Component },
  { path: "auth/login", component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: "auth/register", component: RegisterComponent, canActivate: [NoAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
