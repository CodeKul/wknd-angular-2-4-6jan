import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LgnComponent } from './lgn/lgn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LgnComponent]
})
export class LoginModule { }
