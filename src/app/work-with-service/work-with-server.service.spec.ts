import { TestBed } from '@angular/core/testing';

import { WorkWithServerService } from './work-with-server.service';

describe('WorkWithServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkWithServerService = TestBed.get(WorkWithServerService);
    expect(service).toBeTruthy();
  });
});
