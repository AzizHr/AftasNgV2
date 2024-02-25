import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LevelRequest} from "../../models/request/level-request.models";
import {LevelResponse} from "../../models/response/level-response.models";

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  api: string = "http://localhost:8080/api/levels";
  constructor(private http: HttpClient) {}

  public save(levelRequest: LevelRequest): Observable<LevelResponse> {
    return this.http.post<LevelResponse>(this.api, levelRequest)
  }

  public update(levelRequest: LevelRequest, code: number): Observable<LevelResponse> {
    return this.http.put<LevelResponse>(`${this.api}/${code}`, levelRequest)
  }

  public delete(code: number): Observable<string> {
    return this.http.delete<string>(`${this.api}/${code}`)
  }

  public getLevel(code: number): Observable<LevelResponse> {
    return this.http.get<LevelResponse>(`${this.api}/${code}`)
  }


  public getAll(): Observable<LevelResponse[]> {
    return this.http.get<LevelResponse[]>(this.api)
  }

}
