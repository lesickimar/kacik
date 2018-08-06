import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, keyframes, animate, transition, state, style } from '@angular/animations';
import * as kf from '../hammer-card/keyframes';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-animal-box',
  templateUrl: './animal-box.component.html',
  styleUrls: ['./animal-box.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      // state('slideLeft', style({transform: 'translateX(0)'})),
      // transition('* => slideLeft', animate(1000, keyframes(kf.slideLeft)))
    ]),
    trigger('slideLeft', [
      // state('slideLeft', style({transform: 'translateX(0)'})),
      transition('* => slideLeft', animate(1000, keyframes(kf.slideLeft)))
    ])
  ]
})
export class AnimalBoxComponent implements OnInit {
  @Input() animal: { name: string, description: string, breed: string, photo: string };
  constructor() { }
  animationState: string;
  animationStateNext: string;
  newNumb: number;
  nextMobile: boolean;
  @Output() animalBoxNextMobile = new EventEmitter<any>();

  ngOnInit() {
  }
  startAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
      this.nextMobile = true;
    }
  }

  resetAnimationState() {
    this.animationState = '';
    this.animalBoxNextMobileMethod();
  }

  animalBoxNextMobileMethod() {
    if (this.nextMobile) {
      this.animalBoxNextMobile.emit();
      this.nextMobile = false;
      // this.startAnimationNext('slide');
    }
  }

  startAnimationNext(stateNext) {
    if (!this.animationStateNext) {
      this.animationStateNext = stateNext;
    }
  }

  resetAnimationStateNext() {
    this.animationStateNext = '';
  }

}
