import { TestBed } from '@angular/core/testing';

import { DatoProductoService } from './dato-producto.service';

describe('DatoProductoService', () => {
  let service: DatoProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
