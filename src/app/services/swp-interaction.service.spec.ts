import { TestBed } from '@angular/core/testing';

import { SwpInteractionService } from './swp-interaction.service';

describe('SwpInteractionService', () => {
  let service: SwpInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwpInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
