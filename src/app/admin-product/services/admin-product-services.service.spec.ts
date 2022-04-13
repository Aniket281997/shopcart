import { TestBed } from '@angular/core/testing';

import { AdminProductServicesService } from './admin-product-services.service';

describe('AdminProductServicesService', () => {
  let service: AdminProductServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProductServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
