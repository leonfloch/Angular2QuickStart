import {Component} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';




@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
    
        
})



export class HeroesComponent implements OnInit {
    
    heroes : Hero[];          
    selectedHero: Hero;
    
    constructor(private router: Router, 
        private heroService: HeroService) { 
        
    }
    
    ngOnInit() {
        this.getHeroes();
    }
    
    
    
    getHeroes() {
        this.heroes = this.heroService.getHeroes();
    }
    

    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
    }
    
    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
    
    
    
    
}




