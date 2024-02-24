import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {FishRequest} from "../../models/request/fish-request.models";
import {FishResponse} from "../../models/response/fish-response.models";

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/fish";
  token: string = "lkjfkfjn";

  public save(fishRequest: FishRequest): Observable<FishResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<FishResponse>(this.api, fishRequest, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw error;
        })
      );
  }

  public update(fishRequest: FishRequest, code: string): Observable<FishResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put<FishResponse>(`${this.api}/${code}`, fishRequest, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

  public delete(name: string): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<string>(`${this.api}/${name}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

  public getFish(name: string): Observable<FishResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<FishResponse>(`${this.api}/${name}`, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }


  public getAll(): Observable<FishResponse[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<FishResponse[]>(this.api, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

}
