import { TestBed } from '@angular/core/testing';

import { AuthManagementService } from './auth-management.service';

describe('ManagerService', () => {
  let service: AuthManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
