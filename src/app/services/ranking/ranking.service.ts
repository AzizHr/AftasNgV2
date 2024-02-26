import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RankingRequest} from "../../models/request/ranking-request.models";
import {RankingResponse} from "../../models/response/ranking-response.models";

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  api: string = "http://localhost:8080/api/rankings";
  constructor(private http: HttpClient) {}

  public save(rankingRequest: RankingRequest): Observable<RankingResponse> {
    return this.http.post<RankingResponse>(this.api, rankingRequest);
  }

  public update(rankingRequest: RankingRequest, id: number): Observable<RankingResponse> {
    return this.http.put<RankingResponse>(`${this.api}/${id}`, rankingRequest);
  }

  public delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.api}/${id}`);
  }

  public getLevel(id: number): Observable<RankingResponse> {
    return this.http.get<RankingResponse>(`${this.api}/${id}`);
  }


  public getAll(): Observable<RankingResponse[]> {
    return this.http.get<RankingResponse[]>(this.api);
  }

  public getAllByCompetitionCode(competitionCode: string): Observable<RankingResponse[]> {
    return this.http.get<RankingResponse[]>(`${this.api}/by-competition/${competitionCode}`);
  }

  public getTop3(competitionCode: string): Observable<RankingResponse[]> {
    return this.http.get<RankingResponse[]>(`${this.api}/podium/${competitionCode}`);
  }

}
