import { NgModule ,Optional ,SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from './service_core/video.service';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
HttpClientModule,
HttpModule
  ],
  providers:[VideoService]
})
export class CoreModule {
  
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
