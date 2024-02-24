export interface CompetitionRequest {
  code?: string;
  date: string;
  startTime: string;
  endTime: string;
  numberOfParticipants?: number;
  location: string;
}
