import { Component } from '@angular/core';
import {UserResponse} from "../../../models/response/user-response.models";
import {FormBuilder, Validators} from "@angular/forms";
import {JwtStorageService} from "../../../services/jwt/jwt-storage.service";
import {AuthManagementService} from "../../../services/auth/auth-management/auth-management.service";
import {RoleCheckerService} from "../../../services/auth/role-checker/role-checker.service";
import {LoginRequest} from "../../../models/request/login-request.models";
import {Router} from "@angular/router";

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
  isSubmitted: boolean;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
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
        this.router.navigateByUrl("/manager/competitions")
      },
      err => {
        console.log(err.error.message);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.router.navigateByUrl("/auth/login")
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }

}
