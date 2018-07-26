import { Component, OnInit } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'app-hammer-card',
  templateUrl: './hammer-card.component.html',
  styleUrls: ['./hammer-card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
    ])
  ]
})
export class HammerCardComponent implements OnInit {
  animationState: string;
  constructor() { }

  ngOnInit() {
  }

  startAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
