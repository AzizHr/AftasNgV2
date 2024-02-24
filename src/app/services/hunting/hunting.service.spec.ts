import { TestBed } from '@angular/core/testing';

import { HuntingService } from './hunting.service';

describe('HuntingService', () => {
  let service: HuntingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuntingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
