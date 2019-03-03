import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
      transition('* => slideOutRight', animate(1000, keyframes(kf.slideOutRight)))
      // state('slideLeft', style({transform: 'translateX(0)'})),
      // transition('* => slideLeft', animate(1000, keyframes(kf.slideLeft)))
    ]),
    trigger('slideLeft', [
      // state('slideLeft', style({transform: 'translateX(0)'})),
      transition('* => slideLeft', animate(1000, keyframes(kf.slideLeft)))
    ]),
    trigger('slideRight', [
      // state('slideLeft', style({transform: 'translateX(0)'})),
      transition('* => slideRight', animate(1000, keyframes(kf.slideRight)))
    ])
  ]
})
export class AnimalBoxComponent implements OnInit, OnChanges {

  @Input() animal: { name: string, description: string, breed: string, photo: string };
  constructor() { }
  animationState: string;
  animationStateNext: string;
  animationStatePrevious: string;
  newNumb: number;
  nextMobile: boolean;
  previousMobile: boolean;
  @Output() animalBoxNextMobile = new EventEmitter<any>();
  @Output() animalBoxPreviousMobile = new EventEmitter<any>();

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.animal) {
      console.log('zmienilo sie!');
    }
  }

  startAnimation(state) {
    console.log(state);
    debugger;
    if (!this.animationState) {
      if (state === 'slideOutLeft') {
        this.animationState = state;
        this.nextMobile = true;
      }
      if (state === 'slideOutRight') {
        this.animationState = state;
        this.previousMobile = true;
      }
    }
  }

  resetAnimationState() {
    this.animationState = '';
    this.animalBoxMobileMethod();
  }

  animalBoxMobileMethod() {
    if (this.nextMobile) {
      this.animalBoxNextMobile.emit();
      this.nextMobile = false;
      // this.startAnimationNext('slide');
    }
    if (this.previousMobile) {
      this.animalBoxPreviousMobile.emit();
      this.previousMobile = false;
    }
  }

  startAnimationNext(stateNext) {
    if (!this.animationStateNext) {
      this.animationStateNext = stateNext;
    }
  }
  startAnimationPrevious(statePrevious) {
    if (!this.animationStatePrevious) {
      this.animationStatePrevious = statePrevious;
    }
  }

  resetAnimationStateNext() {
    this.animationStateNext = '';
    this.animationStatePrevious = '';
  }

}
