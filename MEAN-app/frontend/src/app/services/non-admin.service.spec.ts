import { TestBed } from '@angular/core/testing';

import { NonAdminService } from './non-admin.service';

describe('NonAdminService', () => {
  let service: NonAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
