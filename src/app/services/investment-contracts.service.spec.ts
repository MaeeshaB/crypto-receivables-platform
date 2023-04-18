import { TestBed } from '@angular/core/testing';

import { InvestmentContractsService } from './investment-contracts.service';

describe('InvestmentContractsService', () => {
  let service: InvestmentContractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentContractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
