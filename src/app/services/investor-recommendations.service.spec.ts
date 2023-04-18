import { TestBed } from '@angular/core/testing';

import { InvestorRecommendationsService } from './investor-recommendations.service';

describe('InvestorRecommendationsService', () => {
  let service: InvestorRecommendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestorRecommendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
