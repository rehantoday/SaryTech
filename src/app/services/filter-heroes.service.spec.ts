import { TestBed } from '@angular/core/testing';

import { FilterHeroesService } from './filter-heroes.service';

describe('FilterHeroesService', () => {
  let service: FilterHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
