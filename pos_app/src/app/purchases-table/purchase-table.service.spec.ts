import { TestBed } from '@angular/core/testing';

import { PurchaseTableService } from './purchase-table.service';

describe('PurchaseTableService', () => {
  let service: PurchaseTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
