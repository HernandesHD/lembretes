import { TestBed } from '@angular/core/testing';

import { LembretesService } from './lembretes.service';

describe('LembretesService', () => {
  let service: LembretesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LembretesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
