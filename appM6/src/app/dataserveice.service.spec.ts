import { TestBed } from '@angular/core/testing';

import { DataserveiceService } from './dataserveice.service';

describe('DataserveiceService', () => {
  let service: DataserveiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataserveiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
