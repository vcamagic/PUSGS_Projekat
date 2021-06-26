import { TestBed } from '@angular/core/testing';

import { SwpInteractionsService } from './swp-interactions.service';

describe('SwpInteractionsService', () => {
  let service: SwpInteractionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwpInteractionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
