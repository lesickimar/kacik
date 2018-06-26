import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  AnimalList = [{name: 'Chrupa', description: 'Chrupa to chrupa', breed: 'Menda', photo: './assets/lala.jpg'},
  {name: 'Mista', description: 'Mista pociąg', breed: 'Menda', photo: './assets/test1.jpg'},
  {name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/test2.jpg'},
  {name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test3.jpg'},
  {name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test4.jpg'},
  {name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/lala.jpg'},
  {name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/lala.jpg'},
  {name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/lala.jpg'}
];

  cols = 2;

  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() {
    const breakpoints: { [ size: string ]: number } = {
    ['xs'] : 1,
    ['sm'] : 2,
    ['md'] : 3,
    ['lg'] : 3,
    ['xl'] : 4
    };

    this.observableMedia.subscribe(x => this.cols = breakpoints[x.mqAlias]);
  }

}
