import { HttpComponent } from './http/http.component';
import { DashGuard } from './dash/dash.guard';
import { UsrComponent } from './dash/usr/usr.component';
import { RegComponent } from './reg/reg/reg.component';
import { DashComponent } from './dash/dash/dash.component';
import { LgnComponent } from './login/lgn/lgn.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrfComponent } from './dash/prf/prf.component';
import { FormsComponent } from './forms/forms.component';
import { TmpDrvnComponent } from './forms/tmp-drvn.component';
import { DtDrvnComponent } from './forms/dt-drvn.component';
import { PipesComponent } from './pipes/pipes.component';

const dashRoutes: Routes = [
  { path: 'prf', component: PrfComponent },
  { path: 'usr', component: UsrComponent },
]

const frmRts = [
  { path: 'tmp', component: TmpDrvnComponent },
  { path: 'dt', component: DtDrvnComponent }
]
const routes: Routes = [
  { path: '', component: LgnComponent },
  { path: 'lgn', redirectTo: '' },
  { path: 'dash/:usNm', component: DashComponent, children: dashRoutes, canActivate: [DashGuard] },
  { path: 'reg/:id', component: RegComponent },
  { path: 'forms', component: FormsComponent, children: frmRts },
  { path: 'pipes', component: PipesComponent },
  { path: 'http', component: HttpComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
