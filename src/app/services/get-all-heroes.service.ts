/**
 * 
 * Type: Service
 * Name: GetAllHeroesService
 * Description: This service is used to fetch all Heroes from mock JSON source: mock-heroes
 * 
 */

import { Injectable } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class GetAllHeroesService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
