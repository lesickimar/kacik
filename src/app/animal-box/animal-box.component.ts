import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../hammer-card/keyframes';
// import { EventEmitter } from 'events';

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
  @Output() animalBoxNextMobile = new EventEmitter<any>();

  ngOnInit() {
  }
  startAnimation(state) {//ustawić gdzie metode animalboxnextmobilemethod, tak aby nie przelatywało na szybko. Jeśli ustawie w startAnimation tą metode to działa ale ze szybko(moze odliczac czas?)
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
    this.animalBoxNextMobileMethod();
  }

  animalBoxNextMobileMethod() {
    if (this.animationState) {
      this.animalBoxNextMobile.emit();
    }
  }


}
