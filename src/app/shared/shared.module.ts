import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, FooterComponent, MaterialModule, ReactiveFormsModule]
})
export class SharedModule { }
