import { RegModule } from './reg/reg.module';
import { DashModule } from './dash/dash.module';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { TmpDrvnComponent } from './forms/tmp-drvn.component';
import { DtDrvnComponent } from './forms/dt-drvn.component';
import { PipesComponent } from './pipes/pipes.component';
import { JsAdvPipe } from './pipes/js-adv.pipe';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TmpDrvnComponent,
    DtDrvnComponent,
    PipesComponent,
    JsAdvPipe,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    LoginModule,
    DashModule,
    RegModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
