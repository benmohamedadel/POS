import { TestBed } from '@angular/core/testing';

import { DepencesTableService } from './depences-table.service';

describe('DepencesTableService', () => {
  let service: DepencesTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepencesTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
