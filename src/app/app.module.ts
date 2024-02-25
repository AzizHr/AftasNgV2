import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { CompetitionsComponent } from './components/private/competitions/competitions.component';
import { CompetitionRowComponent } from './components/private/competitions/competition-row/competition-row.component';
import { AddCompetitionComponent } from './components/private/competitions/add-competition/add-competition.component';
import { UpdateCompetitionComponent } from './components/private/competitions/update-competition/update-competition.component';
import { FishComponent } from './components/private/fish/fish.component';
import { FishRowComponent } from './components/private/fish/fish-row/fish-row.component';
import { AddFishComponent } from './components/private/fish/add-fish/add-fish.component';
import { UpdateFishComponent } from './components/private/fish/update-fish/update-fish.component';
import { LevelsComponent } from './components/private/levels/levels.component';
import { LevelRowComponent } from './components/private/levels/level-row/level-row.component';
import { AddLevelComponent } from './components/private/levels/add-level/add-level.component';
import { UpdateLevelComponent } from './components/private/levels/update-level/update-level.component';
import { HuntingsComponent } from './components/private/huntings/huntings.component';
import { RankingsComponent } from './components/private/rankings/rankings.component';
import { RankingRowComponent } from './components/private/rankings/ranking-row/ranking-row.component';
import { AddRankingComponent } from './components/private/rankings/add-ranking/add-ranking.component';
import { UpdateRankingComponent } from './components/private/rankings/update-ranking/update-ranking.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { PCompetitionsComponent } from './components/public/p-competitions/p-competitions.component';
import { PCompetitionCardComponent } from './components/public/p-competitions/p-competition-card/p-competition-card.component';
import { Top3Component } from './components/public/p-competitions/top-3/top-3.component';
import {competitionReducer} from "./store/reducers/competition.reducers";
import {fishReducer} from "./store/reducers/fish.reducers";
import {levelReducer} from "./store/reducers/level.reducers";
import {huntingReducer} from "./store/reducers/hunting.reducers";
import {rankingReducer} from "./store/reducers/ranking.reducers";
import {CompetitionEffects} from "./store/effects/competition.effects";
import {FishEffects} from "./store/effects/fish.effects";
import {LevelEffects} from "./store/effects/level.effects";
import {HuntingEffects} from "./store/effects/hunting.effects";
import {RankingEffects} from "./store/effects/ranking.effects";
import { HuntingRowComponent } from './components/private/huntings/hunting-row/hunting-row.component';
import { AddHuntingComponent } from './components/private/huntings/add-hunting/add-hunting.component';
import { UpdateHuntingComponent } from './components/private/huntings/update-hunting/update-hunting.component';
import {AuthInterceptorProvider} from "./interceptors/auth.interceptor";
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { UsersComponent } from './components/private/users/users.component';
import {usersSelector} from "./store/selectors/user.selectors";
import {userReducer} from "./store/reducers/user.reducers";
import {UserEffects} from "./store/effects/user.effects";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    CompetitionRowComponent,
    AddCompetitionComponent,
    UpdateCompetitionComponent,
    FishComponent,
    FishRowComponent,
    AddFishComponent,
    UpdateFishComponent,
    LevelsComponent,
    LevelRowComponent,
    AddLevelComponent,
    UpdateLevelComponent,
    HuntingsComponent,
    HuntingRowComponent,
    AddHuntingComponent,
    UpdateHuntingComponent,
    RankingsComponent,
    RankingRowComponent,
    AddRankingComponent,
    UpdateRankingComponent,
    NavbarComponent,
    PCompetitionsComponent,
    PCompetitionCardComponent,
    Top3Component,
    HuntingRowComponent,
    AddHuntingComponent,
    UpdateHuntingComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature('competitions', competitionReducer),
    StoreModule.forFeature('fishList', fishReducer),
    StoreModule.forFeature('levels', levelReducer),
    StoreModule.forFeature('huntings', huntingReducer),
    StoreModule.forFeature('rankings', rankingReducer),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([CompetitionEffects, FishEffects, LevelEffects, HuntingEffects, RankingEffects, UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true
    }),
    FormsModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
