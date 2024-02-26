import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginRequest} from "../../../models/request/login-request.models";
import {AuthResponse} from "../../../models/response/auth-response.models";
import {RegisterRequest} from "../../../models/request/register-request.models";
import {JwtStorageService} from "../../jwt/jwt-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthManagementService {

  private MANAGER_AUTH_API: string = 'http://localhost:8080/api/auth';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router, private jwtStorageService: JwtStorageService) {}

  public isLoggedIn(): boolean {
    if(this.jwtStorageService.getToken() && this.jwtStorageService.getUser()) {
      return true;
    }
    else { return false }
  }

  public authenticate(loginRequest: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.MANAGER_AUTH_API}/login`, loginRequest, this.httpOptions
    )
  }

  public register(registerRequest: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.MANAGER_AUTH_API}/register`, registerRequest, this.httpOptions
    )
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigateByUrl('/auth/login');
  }

}
