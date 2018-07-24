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
  fonts = '110px';
  arrow = 'arrowDesktop';
  mobile = false;
  // breakpointsMobile deciding if it's desktop or mobile version(if mobile version then only 1 picture will appear)
  breakpointsMobile: { [size: string]: boolean } = {
    ['xs']: true,
    ['sm']: false,
    ['md']: false,
    ['lg']: false,
    ['xl']: false,
  };
  constructor(private observableMedia: ObservableMedia, private listService: ListService) {
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
      ['xl']: '110px'
    };

    const breakpointsArrow: { [size: string]: string } = {
      ['xs']: 'arrowMobile',
      ['sm']: 'arrowMobile',
      ['md']: 'arrowMobile',
      ['lg']: 'arrowDesktop',
      ['xl']: 'arrowDesktop'
    };

    this.observableMedia.subscribe(x => this.cols = breakpointsCols[x.mqAlias]);
    this.observableMedia.subscribe(x => this.fonts = breakpointsFonts[x.mqAlias]);
    this.observableMedia.subscribe(x => this.arrow = breakpointsArrow[x.mqAlias]);
  }

  takeListFromService() {
    this.observableMedia.subscribe(x => this.mobile = this.breakpointsMobile[x.mqAlias]);

    this.listService.getAnimalListObs().subscribe((animals: Array<Animal>) => {
      if (animals.length <= this.listNumber + 4) {
        this.nextArrow = false;
        console.log('thats ALL BICZ' + this.listNumber + 4);
      }

      if (this.mobile === true) {
        this.AnimalList = animals.slice(this.listNumber, this.listNumber + 1);
        this.nextArrow = false;
        this.previousArrow = false;
        console.log('WYYY');
      } else {
        this.AnimalList = animals.slice(this.listNumber, this.listNumber + 4);
      }
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
