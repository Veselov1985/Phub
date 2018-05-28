import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/Shared.module';

import { VrComponent } from './vr/vr.component';
import { SharedVideoModule } from './SharedVideo/SharedVideo.module';


@NgModule({
  declarations: [
    AppComponent,
    VrComponent
],
  imports: [
  SharedModule,
  BrowserModule,
  SharedVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
     NO_ERRORS_SCHEMA]
})
export class AppModule { }
