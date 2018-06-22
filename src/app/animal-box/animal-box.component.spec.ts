import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalBoxComponent } from './animal-box.component';

describe('AnimalBoxComponent', () => {
  let component: AnimalBoxComponent;
  let fixture: ComponentFixture<AnimalBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
