import { Component } from '@angular/core';
import {RoleCheckerService} from "../../../services/auth/role-checker/role-checker.service";
import {UserResponse} from "../../../models/response/user-response.models";
import {JwtStorageService} from "../../../services/jwt/jwt-storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: UserResponse;
  isLoggedIn = false;
  isManager = false;
  isJury = false;
  isMember = false;

  constructor(private roleCheckerService: RoleCheckerService, private jwtStorageService: JwtStorageService) {
    this.isLoggedIn = roleCheckerService.isLoggedIn();
    this.isManager = roleCheckerService.isManager();
    this.isJury = roleCheckerService.isJury();
    this.isMember = roleCheckerService.isMember()
    this.user = jwtStorageService.getUser()
  }

  logout(): void {
    this.jwtStorageService.removeToken()
    this.jwtStorageService.removeUser()
    window.location.reload()
  }

}
