import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule,
  MatFormFieldModule, MatInputModule, MatFormFieldControl
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, CommonModule,
    MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatToolbarModule, CommonModule
    , MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule],
})
export class CustomMaterialModule { }
