import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../domain/hero';
import { HEROES } from '../mocks/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
