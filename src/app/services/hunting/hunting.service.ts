import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {HuntingRequest} from "../../models/request/hunting-request.models";
import {HuntingResponse} from "../../models/response/hunting-response.models";

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/huntings";
  token: string = "lkjfkfjn";

  public save(huntingRequest: HuntingRequest): Observable<HuntingResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<HuntingResponse>(this.api, huntingRequest, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw error;
        })
      );
  }

  public update(huntingRequest: HuntingRequest, id: number): Observable<HuntingResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put<HuntingResponse>(`${this.api}/${id}`, huntingRequest, { headers })
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

  public getHunting(id: number): Observable<HuntingResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<HuntingResponse>(`${this.api}/${id}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }


  public getAll(): Observable<HuntingResponse[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<HuntingResponse[]>(this.api, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

}
