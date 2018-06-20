import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';

@NgModule({
imports: [MatButtonModule, MatToolbarModule, CommonModule, MatCardModule],
exports: [MatButtonModule, MatToolbarModule, CommonModule, MatCardModule],
})
export class CustomMaterialModule { }