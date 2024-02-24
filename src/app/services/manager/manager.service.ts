import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {UserResponse} from "../../models/response/user-response.models";
import {UserNumAndRole} from "../../models/request/user-num-and-role.models";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/manager";
  token: string = "lkjfkfjn";

  public activateUserAccount(userNum: number): Observable<UserResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<UserResponse>(`${this.api}/activate-user-account`, userNum, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw error;
        })
      );
  }

  public changeUserRole(userNumAndRole: UserNumAndRole): Observable<UserResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<UserResponse>(`${this.api}/change-user-role`, userNumAndRole, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw error;
        })
      );
  }

  public getAllUsers(): Observable<UserResponse[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<UserResponse[]>(`${this.api}/users`, { headers })
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw error;
        })
      );
  }

}
