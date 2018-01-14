import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleUiComponent } from './sample-ui/ui.component';
import { LittleComponent } from './sample-ui/little.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleUiComponent,
    LittleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
