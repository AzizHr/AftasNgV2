import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FishRequest} from "../../models/request/fish-request.models";
import {FishResponse} from "../../models/response/fish-response.models";

@Injectable({
  providedIn: 'root'
})
export class FishService {

  api: string = "http://localhost:8080/api/fish";

  constructor(private http: HttpClient) {}

  public save(fishRequest: FishRequest): Observable<FishResponse> {
    return this.http.post<FishResponse>(this.api, fishRequest);
  }

  public update(fishRequest: FishRequest, code: string): Observable<FishResponse> {
    return this.http.put<FishResponse>(`${this.api}/${code}`, fishRequest);
  }

  public delete(name: string): Observable<string> {
    return this.http.delete<string>(`${this.api}/${name}`);
  }

  public getFish(name: string): Observable<FishResponse> {
    return this.http.get<FishResponse>(`${this.api}/${name}`);
  }


  public getAll(): Observable<FishResponse[]> {
    return this.http.get<FishResponse[]>(this.api);
  }

}
