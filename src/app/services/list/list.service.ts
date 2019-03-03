import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Animal } from '../../temporaryListClass';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  AnimalList: Array<Animal>;

  animalListObs = new BehaviorSubject(this.AnimalList);

  constructor() {
    this.AnimalList = [
    { name: 'Chrupa', description: 'Chrupa to chrupa, Chrupa to chrupa,Chrupa to chrupaChr', breed: 'Menda', photo: './assets/lala.jpg' },
    { name: 'Mista', description: 'Mista pociąg', breed: 'Menda', photo: './assets/test1.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/test2.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test3.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test4.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/lala.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/lala.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/lala.jpg' },
    { name: 'Mista', description: 'Mista pociąg', breed: 'Menda', photo: './assets/test1.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/test2.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test3.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test4.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/lala.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/lala.jpg' },
    { name: 'Mista', description: 'Mista pociąg', breed: 'Menda', photo: './assets/test1.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/test2.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test3.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test4.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/lala.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/lala.jpg' },
    { name: 'Mista', description: 'Mista pociąg', breed: 'Menda', photo: './assets/test1.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/test2.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test3.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test4.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/lala.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/lala.jpg' },
    { name: 'Mista', description: 'Mista pociąg', breed: 'Menda', photo: './assets/test1.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/test2.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test3.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test4.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/lala.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/lala.jpg' },
    { name: 'Mista', description: 'Mista pociąg', breed: 'Menda', photo: './assets/test1.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/test2.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test3.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/test4.jpg' },
    { name: 'Test', description: 'Testujemy pociąg', breed: 'Test', photo: './assets/lala.jpg' },
    { name: 'Kamikadze', description: 'wooho', breed: 'Kam', photo: './assets/lala.jpg' },
    ];

    this.animalListObs.next(this.AnimalList);
  }

  getAnimalListObs(): Observable<Array<Animal>> {
    return this.animalListObs.asObservable();
  }
}
