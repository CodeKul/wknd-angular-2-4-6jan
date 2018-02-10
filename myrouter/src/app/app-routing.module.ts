import { DashGuard } from './dash/dash.guard';
import { UsrComponent } from './dash/usr/usr.component';
import { RegComponent } from './reg/reg/reg.component';
import { DashComponent } from './dash/dash/dash.component';
import { LgnComponent } from './login/lgn/lgn.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrfComponent } from './dash/prf/prf.component';

const dashRoutes: Routes = [
  { path: 'prf', component: PrfComponent },
  { path: 'usr', component: UsrComponent },
]
const routes: Routes = [
  { path: '', component: LgnComponent },
  { path: 'lgn', redirectTo: '' },
  { path: 'dash/:usNm', component: DashComponent, children: dashRoutes, canActivate: [DashGuard] },
  { path: 'reg/:id', component: RegComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
