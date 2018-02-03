import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { SampleUiComponent } from './sample-ui/ui.component';
import { LittleComponent } from './sample-ui/little.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CustIpComponent } from './databinding/cust-ip.component';
import { CustOpComponent } from './databinding/cust-op.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustSmplDirective } from './directives/cust-smpl.directive';
import { CustStrDirective } from './directives/cust-str.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LclRfComponent } from './lcl-rf/lcl-rf.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleUiComponent,
    LittleComponent,
    DatabindingComponent,
    CustIpComponent,
    CustOpComponent,
    DirectivesComponent,
    CustSmplDirective,
    CustStrDirective,
    LifecycleComponent,
    LclRfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
