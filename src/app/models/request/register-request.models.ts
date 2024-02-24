import {Role} from "../../enums/role.enums";
import {IdentityDocumentType} from "../../enums/identity-document-type.enums";

export interface RegisterRequest {
  num?: number;
  name: string;
  familyName: string;
  username: string;
  password: string;
  role?: Role;
  isActivated?: boolean;
  accessionDate?: string;
  nationality?: string;
  identityDocument: IdentityDocumentType;
  identityNumber: string;
}
