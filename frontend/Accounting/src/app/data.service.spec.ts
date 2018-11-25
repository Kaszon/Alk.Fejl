import { TestBed } from '@angular/core/testing';

import { PartnerDataService } from './data.service';

describe('PartnerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartnerDataService = TestBed.get(PartnerDataService);
    expect(service).toBeTruthy();
  });
});
