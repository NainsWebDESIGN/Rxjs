import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConcatComponent } from './combination/concat/concat.component';
import { ForkJoinComponent } from './combination/forkJoin/forkJoin.component';
import { CombinationComponent } from './combination/combination.component';
import { CreateComponent } from './create/create.component';
import { OfComponent } from './create/of/of.component';
import { FromComponent } from './create/from/from.component';

import { AppService } from '@service/app.service';
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ConcatComponent,
    ForkJoinComponent,
    CombinationComponent,
    CreateComponent,
    OfComponent,
    FromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
