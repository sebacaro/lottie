
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  template: `
            <lottie-animation-view
            [options]="lottieConfig"
            [width]="350">
            </lottie-animation-view>
            `,
  styleUrls: ['./animation.component.scss']
})

export class AnimationComponent {

  public lottieConfig: Object;
  private animationSpeed: number = 1;

  constructor() {
    this.lottieConfig = {
      path: 'assets/json/heart.json',
      autoplay: true,
      loop: true
    };
  }

}