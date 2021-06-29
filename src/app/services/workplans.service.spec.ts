import { TestBed } from '@angular/core/testing';

import { WorkplansService } from './workplans.service';

describe('WorkplansService', () => {
  let service: WorkplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
