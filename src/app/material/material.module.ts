import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
// import { MatLabelModule } from '@angular/material/label';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [MatToolbarModule, MatIconModule,
    MatButtonModule, MatInputModule]
})
export class MaterialModule { }
