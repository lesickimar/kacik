import { Component, OnInit, Input, Output } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../hammer-card/keyframes';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-animal-box',
  templateUrl: './animal-box.component.html',
  styleUrls: ['./animal-box.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
    ])
  ]
})
export class AnimalBoxComponent implements OnInit {
  @Input() animal: { name: string, description: string, breed: string, photo: string };
  constructor() { }
  animationState: string;
  newNumb: number;
  @Output() animalBoxNextMobile = new EventEmitter<{addNumb: number}>(); //WHYYY

  ngOnInit() {
  }
  startAnimation(state) {
    console.log(state);
    this.animalBoxNextMobileMethod();
    this.animalBoxNextMobile.emit({addNumb: this.newNumb});
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  animalBoxNextMobileMethod() {
    this.animalBoxNextMobile.emit({addNumb: this.newNumb});
  }


}
