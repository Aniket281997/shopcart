import { TestBed } from '@angular/core/testing';

import { CustomerProductServicesService } from './customer-product-services.service';

describe('CustomerProductServicesService', () => {
  let service: CustomerProductServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerProductServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
