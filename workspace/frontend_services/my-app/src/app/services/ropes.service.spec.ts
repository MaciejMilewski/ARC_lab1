import { TestBed } from '@angular/core/testing';

import { RopesService } from './ropes.service';

describe('RopesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RopesService = TestBed.get(RopesService);
    expect(service).toBeTruthy();
  });
});
