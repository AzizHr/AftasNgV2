import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HuntingRequest} from "../../models/request/hunting-request.models";
import {HuntingResponse} from "../../models/response/hunting-response.models";

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  api: string = "http://localhost:8080/api/huntings";
  constructor(private http: HttpClient) {}

  public save(huntingRequest: HuntingRequest): Observable<HuntingResponse> {
    return this.http.post<HuntingResponse>(this.api, huntingRequest)
  }

  public update(huntingRequest: HuntingRequest, id: number): Observable<HuntingResponse> {
    return this.http.put<HuntingResponse>(`${this.api}/${id}`, huntingRequest);
  }

  public delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.api}/${id}`);
  }

  public getHunting(id: number): Observable<HuntingResponse> {
    return this.http.get<HuntingResponse>(`${this.api}/${id}`);
  }


  public getAll(): Observable<HuntingResponse[]> {
    return this.http.get<HuntingResponse[]>(this.api);
  }

}
