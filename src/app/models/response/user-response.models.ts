import {Role} from "../../enums/role.enums";
import {IdentityDocumentType} from "../../enums/identity-document-type.enums";

export interface UserResponse {
  num: number;
  name: string;
  familyName: string;
  username: string;
  role: Role;
  activated: boolean;
  accessionDate: string;
  nationality: string;
  identityDocument: IdentityDocumentType;
  identityNumber: string;
}
