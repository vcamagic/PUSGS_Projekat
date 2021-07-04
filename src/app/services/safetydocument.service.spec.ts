import { TestBed } from '@angular/core/testing';

import { SafetydocumentService } from './safetydocument.service';

describe('SafetydocumentService', () => {
  let service: SafetydocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafetydocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
