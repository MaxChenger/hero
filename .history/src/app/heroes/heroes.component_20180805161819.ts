import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }
  public pickHero(hero) {
    console.log('选中的英雄是' + hero);
  }
}
