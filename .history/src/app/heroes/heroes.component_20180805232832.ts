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
  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }
  public getHeroes(): void {
    this.heroesService.getHeroes().subscribe((res) => {
      this.heroes = res;
    });
  }
}
