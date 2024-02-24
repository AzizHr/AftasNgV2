import { Component } from '@angular/core';
import {UserResponse} from "../../../models/response/user-response.models";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthManagementService} from "../../../services/auth/auth-management/auth-management.service";
import {JwtStorageService} from "../../../services/jwt/jwt-storage.service";
import {IdentityDocumentType} from "../../../enums/identity-document-type.enums";
import {RegisterRequest} from "../../../models/request/register-request.models";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: UserResponse;
  isRegistered = false;
  isRegisterFailed = false;
  errorMessage = '';
  isSubmitted: boolean;

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
              private jwtStorageService: JwtStorageService) {}

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

    this.authManagementService.authenticate(registerRequest).subscribe(
      (data) => {
        this.jwtStorageService.saveToken(data.token);
        this.jwtStorageService.saveUser(data.user);
        this.user = this.jwtStorageService.getUser();
        this.isRegistered = true;
        this.isRegisterFailed = false;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }
}
