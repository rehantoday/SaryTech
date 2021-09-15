import { TestBed } from '@angular/core/testing';

import { GetAllHeroesService } from './get-all-heroes.service';

describe('GetAllHeroesService', () => {
  let service: GetAllHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
