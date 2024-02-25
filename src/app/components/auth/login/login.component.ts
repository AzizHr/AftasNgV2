import { Component } from '@angular/core';
import {UserResponse} from "../../../models/response/user-response.models";
import {FormBuilder, Validators} from "@angular/forms";
import {JwtStorageService} from "../../../services/jwt/jwt-storage.service";
import {AuthManagementService} from "../../../services/auth/auth-management/auth-management.service";
import {RoleCheckerService} from "../../../services/auth/role-checker/role-checker.service";
import {LoginRequest} from "../../../models/request/login-request.models";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {Role} from "../../../enums/role.enums";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: UserResponse;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSubmitted = false;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authManagementService: AuthManagementService,
              private jwtStorageService: JwtStorageService,
              private roleCheckerService: RoleCheckerService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.roleCheckerService.isLoggedIn();
  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.loginForm.get(field)?.hasError(errorType) &&
      (this.loginForm.get(field)?.dirty ||
        this.loginForm.get(field)?.touched || this.isSubmitted);
  }

  onSubmit() {
    const loginRequest: LoginRequest  = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.authManagementService.authenticate(loginRequest).subscribe(
      (data) => {
        console.log(data);
        this.jwtStorageService.saveToken(data.token);
        this.jwtStorageService.saveUser(data.user);
        this.user = this.jwtStorageService.getUser();
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        setTimeout(() => {
          this.redirectBasedOnUserRole(this.user.role);
        }, 1500);
      },
      err => {
        console.log(err.error.message);
        this.errorMessage = err.error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: this.errorMessage
        });
        this.isLoginFailed = true;
        this.router.navigateByUrl("/auth/login")
      }
    )
    this.isSubmitted = true;
  }

  redirectBasedOnUserRole(role: Role): void {
    switch (role) {
      case Role.MANAGER:
        this.router.navigateByUrl("/manager/competitions");
        break;
      case Role.JURY:
        this.router.navigateByUrl("/manager/competitions");
        break;
      case Role.MEMBER:
        this.router.navigateByUrl("/competitions");
        break;
    }
  }

}
