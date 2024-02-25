import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserResponse} from "../../models/response/user-response.models";
import {UserNumAndRole} from "../../models/request/user-num-and-role.models";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  api: string = "http://localhost:8080/api/manager";
  constructor(private http: HttpClient) {}

  public activateUserAccount(userNum: number): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.api}/activate-user-account`, userNum)
  }

  public changeUserRole(userNumAndRole: UserNumAndRole): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.api}/change-user-role`, userNumAndRole)
  }

  public getAllUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.api}/users`)
  }

}
