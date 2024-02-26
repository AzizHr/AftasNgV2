import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CompetitionRequest} from "../../models/request/competition-request.models";
import {Observable} from "rxjs";
import {CompetitionResponse} from "../../models/response/competition-response.models";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/competitions";

  public save(competitionRequest: CompetitionRequest): Observable<CompetitionResponse> {
    return this.http.post<CompetitionResponse>(this.api, competitionRequest);
  }

  public update(competitionRequest: CompetitionRequest, code: string): Observable<CompetitionResponse> {
    return this.http.put<CompetitionResponse>(`${this.api}/${code}`, competitionRequest);
  }

  public delete(code: string): Observable<string> {
    return this.http.delete<string>(`${this.api}/${code}`);
  }

  public getCompetition(code: string): Observable<CompetitionResponse> {
    return this.http.get<CompetitionResponse>(`${this.api}/${code}`);
  }


  public getAll(page: number, size: number): Observable<any> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<any>(this.api, { params });
  }

  public getAll_(): Observable<any> {
    return this.http.get<any>(this.api);
  }

}
