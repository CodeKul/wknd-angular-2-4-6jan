import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { NavComponent } from './nav.component';
import { CntrCrdComponent } from './cntr-crd.component';
import { CrdComponent } from './crd.component';
import { PrfComponent } from './prf/prf.component';
import { UsrComponent } from './usr/usr.component';
import { DashGuard } from './dash.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DashComponent, NavComponent, CntrCrdComponent, CrdComponent, PrfComponent, UsrComponent],
  providers: [DashGuard]
})
export class DashModule { }
