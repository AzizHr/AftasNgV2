import {Component, Input} from '@angular/core';
import {CompetitionResponse} from "../../../../models/response/competition-response.models";

@Component({
  selector: 'app-p-competition-card',
  templateUrl: './p-competition-card.component.html',
  styleUrls: ['./p-competition-card.component.css']
})
export class PCompetitionCardComponent {
  @Input() competition: CompetitionResponse;

  isRunning(competition: CompetitionResponse) {
    const currentTime = new Date();
    const startDate = new Date(competition.date + ' ' + competition.startTime);
    const endDate = new Date(competition.date + ' ' + competition.endTime);

    return startDate <= currentTime && endDate >= currentTime;
  }

  isDone(competition: CompetitionResponse) {
    const currentTime = new Date();
    const endDate = new Date(competition.date + ' ' + competition.endTime);
    return endDate < currentTime;
  }

  isUpcoming(competition: CompetitionResponse) {
    const currentTime = new Date();
    const startDate = new Date(competition.date + ' ' + competition.startTime);
    return startDate > currentTime;
  }
}
