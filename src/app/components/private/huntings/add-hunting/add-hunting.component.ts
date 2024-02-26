import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import * as HuntingActions from "../../../../store/actions/hunting.actions";
import {competitionsSelector} from "../../../../store/selectors/competition.selectors";
import {HuntingRequest} from "../../../../models/request/hunting-request.models";
import {CompetitionResponse} from "../../../../models/response/competition-response.models";
import {FishResponse} from "../../../../models/response/fish-response.models";
import {fishListSelector} from "../../../../store/selectors/fish.selectors";
import {loadFishList} from "../../../../store/actions/fish.actions";
import {loadCompetitions_} from "../../../../store/actions/competition.actions";
import {RankingResponse} from "../../../../models/response/ranking-response.models";
import {rankingsSelector} from "../../../../store/selectors/ranking.selectors";
import {loadRankingsByCompetitionCode} from "../../../../store/actions/ranking.actions";

@Component({
  selector: 'app-add-hunting',
  templateUrl: './add-hunting.component.html',
  styleUrls: ['./add-hunting.component.css']
})
export class AddHuntingComponent {

  competitions$: Observable<any>;
  competitions: CompetitionResponse[] = [];
  fishList$: Observable<any>;
  fishList: FishResponse[] = [];
  rankings$: Observable<any>;
  rankings: RankingResponse[] = [];
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.competitions$ = this.store.pipe(select(competitionsSelector))
    this.fishList$ = this.store.pipe(select(fishListSelector))
    this.rankings$ = this.store.pipe(select(rankingsSelector))

  }

  ngOnInit(): void {
    this.store.dispatch(loadCompetitions_());
    this.competitions$.subscribe((data) => {
      this.competitions = data.content;
    })

    this.store.dispatch(loadFishList());
    this.fishList$.subscribe((fishList) => {
      this.fishList = fishList;
    })
  }


  onChange(competitionCode: any): void {
    this.store.dispatch(loadRankingsByCompetitionCode({ competitionCode: competitionCode}));
    this.rankings$.subscribe((rankings) => {
      this.rankings = rankings;
      console.log(this.rankings)
    })
  }

  huntingForm = this.formBuilder.group({
    numberOfFish: [null, [Validators.required]],
    competitionCode: ['', []],
    memberNum: [null, []],
    fishName: ['', []],
  });


  onSubmit() {
    const huntingRequest: HuntingRequest = {
      numberOfFish: this.huntingForm.value.numberOfFish,
      competitionCode: this.huntingForm.value.competitionCode,
      memberNum: this.huntingForm.value.memberNum,
      fishName: this.huntingForm.value.fishName
    }

    console.log(this.huntingForm.value)
    this.store.dispatch(HuntingActions.addHunting({ huntingRequest: huntingRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.huntingForm.get(field)?.hasError(errorType) &&
      (this.huntingForm.get(field)?.dirty ||
        this.huntingForm.get(field)?.touched || this.isSubmitted);
  }

}
