import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] ;
  public selectedHero: Hero;
  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }
  public pickHero(hero) {
    console.log('选中的英雄是' + hero);
    this.selectedHero = hero
  }
  public getHeroes(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }
}
