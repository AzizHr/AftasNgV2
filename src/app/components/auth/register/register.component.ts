import { Component } from '@angular/core';
import {UserResponse} from "../../../models/response/user-response.models";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthManagementService} from "../../../services/auth/auth-management/auth-management.service";
import {JwtStorageService} from "../../../services/jwt/jwt-storage.service";
import {IdentityDocumentType} from "../../../enums/identity-document-type.enums";
import {RegisterRequest} from "../../../models/request/register-request.models";
import Swal from "sweetalert2";
import {Role} from "../../../enums/role.enums";
import {RoleCheckerService} from "../../../services/auth/role-checker/role-checker.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  identityDocuments = Object.keys(IdentityDocumentType)
  isRegistered = false;
  isRegisterFailed = false;
  errorMessage = '';
  isSubmitted = false;

  registerForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    familyName: ['', Validators.required],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    identityDocument: [IdentityDocumentType.CIN, [Validators.required]],
    identityNumber: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private authManagementService: AuthManagementService,
              private jwtStorageService: JwtStorageService,
              private roleCheckerService: RoleCheckerService,
              private router: Router) {}

  ngOnInit(): void {}

  isFieldValid(field: string, errorType: string): boolean {
    return this.registerForm.get(field)?.hasError(errorType) &&
      (this.registerForm.get(field)?.dirty ||
        this.registerForm.get(field)?.touched || this.isSubmitted);
  }

  onSubmit() {
    const registerRequest: RegisterRequest  = {
      name: this.registerForm.value.name,
      familyName: this.registerForm.value.familyName,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      identityDocument: this.registerForm.value.identityDocument,
      identityNumber: this.registerForm.value.identityNumber
    }

    this.authManagementService.register(registerRequest).subscribe(
      (data) => {
        this.isRegistered = true;
        this.isRegisterFailed = false;
        setTimeout(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account created with success",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl("/auth/login")
        }, 1500);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: this.errorMessage,
        });
      }
    )
    this.isSubmitted = true;
  }
}
