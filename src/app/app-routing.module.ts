import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


// Custom components
import { AnimationComponent } from './animation/animation.component';
import { HomeComponent } from './home/home.component';
import { TefComponent } from './tef/tef.component';
import { DogComponent } from './dog/dog.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'animation', component: AnimationComponent},
  { path: 'tef', component: TefComponent},
  { path: 'dog', component: DogComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



