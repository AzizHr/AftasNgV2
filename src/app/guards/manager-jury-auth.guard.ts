import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {RoleCheckerService} from "../services/auth/role-checker/role-checker.service";

@Injectable({
  providedIn: 'root'
})
export class ManagerJuryAuthGuard implements CanActivate {

  constructor(private roleCheckerService: RoleCheckerService) {}

  canActivate(): boolean {
    if (this.roleCheckerService.isManager() || this.roleCheckerService.isJury()) {
      return true;
    } else {
      window.history.back();
      return false;
    }
  }
}
