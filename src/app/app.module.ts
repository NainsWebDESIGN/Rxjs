import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OperatorsComponent } from './operators/operators.component';
import { CreateComponent } from './create/create.component';
import {
  OfComponent, FromComponent, FromEventComponent, Frompromise, Boring, Timer, SubscriptionComponent
} from './create/createChild.component/createChild.component';
import {
  Map, Filter, Take, First, TakeUntil, ConcatAll
} from './operators/operatorsChild/operatorsChild.component';

import { AppService } from '@service/app.service';
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent, OperatorsComponent, CreateComponent, OfComponent,
    FromComponent, FromEventComponent, Frompromise, Boring, Timer,
    SubscriptionComponent, Map, Filter, Take, First, TakeUntil, ConcatAll
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
