import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    
    getHeroes() {
        return HEROES;        
    }
    
    getHero(id: number) {
        return this.getHeroes().filter(hero => hero.id === id)[0];
    }
    
    
}