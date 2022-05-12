import { TestBed } from '@angular/core/testing';

import { VillanoService } from './villano.service';

describe('VillanoService', () => {
  let service: VillanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
