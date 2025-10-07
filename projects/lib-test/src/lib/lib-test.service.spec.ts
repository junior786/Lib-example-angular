import { TestBed } from '@angular/core/testing';

import { LibTestService } from './lib-test.service';

describe('LibTestService', () => {
  let service: LibTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
