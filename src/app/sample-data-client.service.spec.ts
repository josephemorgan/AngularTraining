import { TestBed } from '@angular/core/testing';

import { SampleDataClientService } from './sample-data-client.service';

describe('SampleDataClientService', () => {
  let service: SampleDataClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleDataClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
