import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
@Injectable()

export class HeroesService {
    constructor(){}
/**
 * 获取英雄列表
 * 使用Rxjs的of()函数来模拟从服务器返回数据
 * of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。
 */
public getHeroes(): Observable<Hero[]> {
    return of(HEROES);
}

public getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => 
        hero.id === id
    ))
}
}