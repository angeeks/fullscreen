import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GtagModule, GtagID } from '@angeeks/gtag';
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
  providers: [
    { provide: GtagID, useValue: 'UA-119875696-1' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
