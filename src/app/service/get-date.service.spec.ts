import { TestBed } from '@angular/core/testing';

import { GetDateService } from './get-date_service';

describe('CurrentDateService', () => {
  let service: GetDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
