import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/Shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  SharedModule,
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
