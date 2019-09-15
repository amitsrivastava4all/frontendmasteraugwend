import { TestBed } from '@angular/core/testing';

import { ServercallService } from './servercall.service';

describe('ServercallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServercallService = TestBed.get(ServercallService);
    expect(service).toBeTruthy();
  });
});
