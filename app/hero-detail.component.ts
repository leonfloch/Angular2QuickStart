import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls:  ['app/hero-detail.component.css'],
  
  
})

export class HeroDetailComponent implements OnInit {
    
    @Input() hero: Hero;
    
    ngOnInit() {        
        let id = +this.routeParams.get('id');
        this.hero = this.heroService.getHero(id);
        
    }
    
    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
        
    }
    
    goBack() {
        window.history.back();
    }
    
    
}