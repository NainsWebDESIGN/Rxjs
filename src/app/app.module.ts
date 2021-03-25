import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConcatComponent } from './combination/concat/concat.component';
import { ForkJoinComponent } from './combination/forkJoin/forkJoin.component';
import { CombinationComponent } from './combination/combination.component';
import { CreateComponent } from './create/create.component';

import { ConcatService } from '@service/concat.service';
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ConcatComponent,
    ForkJoinComponent,
    CombinationComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConcatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
