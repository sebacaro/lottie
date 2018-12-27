import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Lottie
import { LottieAnimationViewModule } from 'ng-lottie';

//Componentes
import { AppComponent } from './app.component';
import { AnimationComponent } from './animation/animation.component';
import { HomeComponent } from './home/home.component';
import { TefComponent } from './tef/tef.component';
import { DogComponent } from './dog/dog.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    HomeComponent,
    TefComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    LottieAnimationViewModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
