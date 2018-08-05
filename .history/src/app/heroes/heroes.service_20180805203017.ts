import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';
@Injectable()

export class HeroesService {
    constructor(){}
/**
 * 获取英雄列表
 */
public getHeroes(): Hero[] {
    return HEROES;
}
}