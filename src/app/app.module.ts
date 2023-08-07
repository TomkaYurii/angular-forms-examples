import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TddExample01Component} from './tdd-example01/tdd-example01.component';
import { TddExample02Component } from './tdd-example02/tdd-example02.component';
import { TddExample03Component } from './tdd-example03/tdd-example03.component';

@NgModule({
  declarations: [
    AppComponent,
    TddExample01Component,
    TddExample02Component,
    TddExample03Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
