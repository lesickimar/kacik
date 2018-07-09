import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { ListService } from '../services/list/list.service';
import { Animal } from '../temporaryListClass';


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
  fonts = '150px';

  constructor(private observableMedia: ObservableMedia, private listService: ListService) {
    // this.listService.getAnimalListObs().subscribe((animals: Array<Animal>) => {
    //   this.AnimalList = animals.slice(this.listNumber, this.listNumber + 4);
    // });
    this.takeListFromService();
  }

  ngOnInit() {
    const breakpointsCols: { [size: string]: number } = {
      ['xs']: 1,
      ['sm']: 2,
      ['md']: 2,
      ['lg']: 3,
      ['xl']: 4
    };

    const breakpointsFonts: { [size: string]: string } = {
      ['xs']: '20px',
      ['sm']: '50px',
      ['md']: '80px',
      ['lg']: '100px',
      ['xl']: '150px'
    };

    this.observableMedia.subscribe(x => this.cols = breakpointsCols[x.mqAlias]);
    this.observableMedia.subscribe(x => this.fonts = breakpointsFonts[x.mqAlias]);
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

  fontSize() {
    return this.fonts;
  }

}
