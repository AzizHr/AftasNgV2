import { TestBed } from '@angular/core/testing';

import { RoleCheckerService } from './role-checker.service';

describe('AuthService', () => {
  let service: RoleCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
