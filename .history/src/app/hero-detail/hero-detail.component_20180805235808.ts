import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { HeroesService } from '../heroes/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }
  public getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroesService.getHero(id).subscribe((res) => {
      this.hero = res;
    })
  }
  public goBack() {
    this.location.back();
  }
}
