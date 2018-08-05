import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes/heroes.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[];
  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }
  public getHeroes() {
    this.heroesService.getHeroes().subscribe((res) => {
      this.heroes = res.slice(1,5);
      console.log(this.heroes);
    })
  }
}
