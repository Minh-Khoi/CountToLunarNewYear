import { TestBed } from '@angular/core/testing';

import { LunarService } from './lunar.service';

describe('LunarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LunarService = TestBed.get(LunarService);
    expect(service).toBeTruthy();
  });
});
