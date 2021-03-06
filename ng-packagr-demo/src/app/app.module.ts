import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuperLibModule } from 'superlib/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SuperLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
