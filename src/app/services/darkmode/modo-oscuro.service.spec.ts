import { TestBed } from '@angular/core/testing';

import { ModoOscuroService } from './modo-oscuro.service';

describe('ModoOscuroService', () => {
  let service: ModoOscuroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModoOscuroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
