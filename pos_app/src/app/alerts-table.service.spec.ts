import { TestBed } from '@angular/core/testing';

import { AlertsTableService } from './alerts-table/alerts-table.service';

describe('AlertsTableService', () => {
  let service: AlertsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
