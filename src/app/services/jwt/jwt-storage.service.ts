import { Injectable } from '@angular/core';
import {UserResponse} from "../../models/response/user-response.models";

@Injectable({
  providedIn: 'root'
})
export class JwtStorageService {

  private TOKEN_KEY: string = 'token';
  private USER_KEY: string = 'user';

  constructor() {}

  public saveToken(token: string): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public saveUser(user: UserResponse): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser(): UserResponse | null {
    try {
      const userString = localStorage.getItem(this.USER_KEY);
      if (userString) {
        return JSON.parse(userString);
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
    return null;
  }

  public removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  public removeUser() {
    localStorage.removeItem(this.USER_KEY);
  }
}
