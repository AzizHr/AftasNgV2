import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CompetitionRequest} from "../../models/request/competition-request.models";
import {catchError, Observable} from "rxjs";
import {CompetitionResponse} from "../../models/response/competition-response.models";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/competitions";
  token: string = "lkjfkfjn";

  public save(competitionRequest: CompetitionRequest): Observable<CompetitionResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<CompetitionResponse>(this.api, competitionRequest, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw error;
        })
      );
  }

  public update(competitionRequest: CompetitionRequest, code: string): Observable<CompetitionResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put<CompetitionResponse>(`${this.api}/${code}`, competitionRequest, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

  public delete(code: string): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<string>(`${this.api}/${code}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

  public getCompetition(code: string): Observable<CompetitionResponse> {
    return this.http.get<CompetitionResponse>(`${this.api}/${code}`)
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }


  public getAll(page: number, size: number): Observable<any> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<any>(this.api, { params })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

}
