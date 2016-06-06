import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
})

export class DashboardComponent {
    heroes: Hero[] = [];
    
    constructor(private router: Router, 
        private heroService: HeroService) { }
    
    ngOnInit() {
        this.heroes = this.heroService.getHeroes().slice(1,5);
        
    }
    
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this.router.navigate(link);
    }
    
 }