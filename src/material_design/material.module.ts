import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
imports: [MatButtonModule, MatToolbarModule, CommonModule, MatCardModule, MatGridListModule],
exports: [MatButtonModule, MatToolbarModule, CommonModule, MatCardModule, MatGridListModule],
})
export class CustomMaterialModule { }
