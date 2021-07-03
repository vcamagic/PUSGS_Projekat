/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkRequestsService } from './work-requests.service';

describe('Service: WorkRequests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkRequestsService]
    });
  });

  it('should ...', inject([WorkRequestsService], (service: WorkRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
