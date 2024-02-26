import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {CompetitionResponse} from "../../../../models/response/competition-response.models";
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {competitionsSelector} from "../../../../store/selectors/competition.selectors";
import {loadCompetitions_} from "../../../../store/actions/competition.actions";
import * as RankingActions from "../../../../store/actions/ranking.actions";
import {UserResponse} from "../../../../models/response/user-response.models";
import {usersSelector} from "../../../../store/selectors/user.selectors";
import {loadUsers} from "../../../../store/actions/user.actions";
import {Role} from "../../../../enums/role.enums";
import {RankingRequest} from "../../../../models/request/ranking-request.models";

@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent {

  competitions$: Observable<any>;
  competitions: CompetitionResponse[] = [];
  users$: Observable<any>;
  users: UserResponse[] = [];
  members: UserResponse[] = [];
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.competitions$ = this.store.pipe(select(competitionsSelector))
    this.users$ = this.store.pipe(select(usersSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(loadCompetitions_());
    this.competitions$.subscribe((data) => {
      this.competitions = data.content;
    })

    this.store.dispatch(loadUsers());
    this.users$.subscribe((users) => {
      this.users = users;
      const onlyMember = this.users.filter(u => u.role == Role.MEMBER)
      if(onlyMember) {
        this.members = onlyMember;
      }
    })
  }

  rankingForm = this.formBuilder.group({
    competitionCode: ['', [Validators.required]],
    memberNum: [null, [Validators.required]],
  });


  onSubmit() {
    const rankingRequest: RankingRequest = {
      competitionCode: this.rankingForm.value.competitionCode,
      memberNum: this.rankingForm.value.memberNum
    }

    console.log(this.rankingForm.value)
    this.store.dispatch(RankingActions.addRanking({ rankingRequest: rankingRequest }));

    this.isSubmitted = true;

  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.rankingForm.get(field)?.hasError(errorType) &&
      (this.rankingForm.get(field)?.dirty ||
        this.rankingForm.get(field)?.touched || this.isSubmitted);
  }

}
