import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GhLayoutModule } from '@angeeks/gh-layout';
import { MdModule } from '@angeeks/md';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    HttpClientModule,
    GhLayoutModule,
    MdModule,
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
