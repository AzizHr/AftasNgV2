import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {LevelRequest} from "../../models/request/level-request.models";
import {LevelResponse} from "../../models/response/level-response.models";

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/levels";
  token: string = "lkjfkfjn";

  public save(levelRequest: LevelRequest): Observable<LevelResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<LevelResponse>(this.api, levelRequest, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw error;
        })
      );
  }

  public update(levelRequest: LevelRequest, code: number): Observable<LevelResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put<LevelResponse>(`${this.api}/${code}`, levelRequest, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

  public delete(code: number): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<string>(`${this.api}/${code}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

  public getLevel(code: number): Observable<LevelResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<LevelResponse>(`${this.api}/${code}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }


  public getAll(): Observable<LevelResponse[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<LevelResponse[]>(this.api, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

}
