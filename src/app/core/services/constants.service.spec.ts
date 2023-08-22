import { TestBed } from '@angular/core/testing';

import { ConstantsService } from './constants.service';

describe('ConstantsServiceService', () => {
  let service: ConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
