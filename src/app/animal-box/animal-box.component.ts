import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal-box',
  templateUrl: './animal-box.component.html',
  styleUrls: ['./animal-box.component.css']
})
export class AnimalBoxComponent implements OnInit {
  @Input() animal:  {name: string, description: string, breed: string, photo: string};
  constructor() { }

  ngOnInit() {
  }

}
