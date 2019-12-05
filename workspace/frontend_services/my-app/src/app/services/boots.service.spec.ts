import { TestBed } from '@angular/core/testing';

import { BootsService } from './boots.service';

describe('BootsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BootsService = TestBed.get(BootsService);
    expect(service).toBeTruthy();
  });
});
