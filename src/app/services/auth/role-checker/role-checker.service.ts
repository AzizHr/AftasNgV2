import {Injectable} from '@angular/core';
import {JwtStorageService} from "../../jwt/jwt-storage.service";
import {Role} from "../../../enums/role.enums";

@Injectable({
  providedIn: 'root'
})
export class RoleCheckerService {

  constructor(private jwtStorageService: JwtStorageService) {}

  isLoggedIn(): boolean {
    return !!this.jwtStorageService.getToken();
  }

  isManager(): boolean {
    const user = this.jwtStorageService.getUser();
    return user && user.role === Role.MANAGER;
  }

  isJury(): boolean {
    const user = this.jwtStorageService.getUser();
    return user && user.role === Role.JURY;
  }

  isMember(): boolean {
    const user = this.jwtStorageService.getUser();
    return user && user.role === Role.MEMBER;
  }

}
