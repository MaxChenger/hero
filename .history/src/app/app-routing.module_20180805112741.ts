import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

 const routes = [
    path: 'heroes',
    component: HeroesComponent,
    children: []
];

@NgModule({
    exports: [RouterModule]
})

export class AppRoutingModule {}