import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

 const routes = [
    { path: '', component: HeroesComponent},
    { path: 'heroes', component : HeroesComponent, children: [
        { path: 'hero-detail', component: HeroDetailComponent}
    ]}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}