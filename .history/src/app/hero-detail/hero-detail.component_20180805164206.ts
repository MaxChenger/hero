import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
