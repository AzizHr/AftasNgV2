import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {RankingRequest} from "../../models/request/ranking-request.models";
import {RankingResponse} from "../../models/response/ranking-response.models";

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/rankings";
  token: string = "lkjfkfjn";

  public save(rankingRequest: RankingRequest): Observable<RankingResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<RankingResponse>(this.api, rankingRequest, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw error;
        })
      );
  }

  public update(rankingRequest: RankingRequest, id: number): Observable<RankingResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put<RankingResponse>(`${this.api}/${id}`, rankingRequest, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

  public delete(id: number): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<string>(`${this.api}/${id}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

  public getLevel(id: number): Observable<RankingResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<RankingResponse>(`${this.api}/${id}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }


  public getAll(): Observable<RankingResponse[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<RankingResponse[]>(this.api, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

  public getTop3(competitionCode: string): Observable<RankingResponse[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<RankingResponse[]>(`${this.api}/podium/${competitionCode}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

}
