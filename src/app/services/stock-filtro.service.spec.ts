import { TestBed } from '@angular/core/testing';

import { StockFiltroService } from './stock-filtro.service';

describe('StockFiltroService', () => {
  let service: StockFiltroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockFiltroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
