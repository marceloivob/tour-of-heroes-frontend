import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent{
 heroes: Hero[] = [];
 selectedHero?: Hero;

 constructor(private heroService: HeroService,
            private messageService:MessageService){}

 ngOnInit(): void{
  this.getHeroes();
}
 getHeroes():void{

  this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
}
 onSelect(hero: Hero):void{
     this.selectedHero = hero;
     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
 }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

