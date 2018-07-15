import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from '../material_design/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AnimalBoxComponent } from './animal-box/animal-box.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListService } from './services/list/list.service';
import { SearchComponent } from './search/search.component';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AnimalBoxComponent,
    AnimalListComponent,
    NavBarComponent,
    SearchComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
