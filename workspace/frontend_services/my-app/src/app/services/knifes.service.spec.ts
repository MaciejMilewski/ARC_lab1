import { TestBed } from '@angular/core/testing';

import { KnifesService } from './knifes.service';

describe('KnifesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnifesService = TestBed.get(KnifesService);
    expect(service).toBeTruthy();
  });
});
