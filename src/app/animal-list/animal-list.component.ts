import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { ListService } from '../services/list/list.service';
import { Animal } from '../temporaryListClass';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  AnimalList: Array<Animal>;
  listNumber = 0;
  previousArrow = false;
  nextArrow = true;

  cols = 2;

  constructor(private observableMedia: ObservableMedia, private listService: ListService) {
    // this.listService.getAnimalListObs().subscribe((animals: Array<Animal>) => {
    //   this.AnimalList = animals.slice(this.listNumber, this.listNumber + 4);
    // });
    this.takeListFromService();
  }

  ngOnInit() {
    const breakpoints: { [size: string]: number } = {
      ['xs']: 1,
      ['sm']: 2,
      ['md']: 3,
      ['lg']: 3,
      ['xl']: 4
    };

    this.observableMedia.subscribe(x => this.cols = breakpoints[x.mqAlias]);
  }

  takeListFromService() {
    this.listService.getAnimalListObs().subscribe((animals: Array<Animal>) => {
      if (animals.length <= this.listNumber + 4) {
        this.nextArrow = false;
        console.log('thats ALL BICZ' + this.listNumber + 4);
      }
      this.AnimalList = animals.slice(this.listNumber, this.listNumber + 4);
    });
  }

  nextPage() {
    this.listNumber += 4;
    this.previousArrow = true;
    this.takeListFromService();
    console.log(this.listNumber);
  }

  previousPage() {
    if (this.listNumber !== 0) {
      this.listNumber -= 4;
      this.nextArrow = true;
      this.takeListFromService();
      console.log(this.listNumber);
    }
    if (this.listNumber === 0) {
      this.previousArrow = false;
    }

  }

}
