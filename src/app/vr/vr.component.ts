import { Component, OnInit ,OnDestroy} from '@angular/core';
import {VgAPI} from 'videogular2/core';
import {Subscription} from 'rxjs/Subscription';

import { VideoService } from './../Core/service_core/video.service';

@Component({
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.css']
})
export class VrComponent implements OnInit {
  getSub:Subscription;
  preload:string = 'auto';
  api:VgAPI;
  dashBitrates:any;
  url:string='http://91.235.136.123:665/restapi/content/getvideo';

  constructor(private video:VideoService) { }

  ngOnInit() {
   this.getSub= this.video.getVideo().subscribe(data =>console.log('video',data))
  }

  onPlayerReady(api:VgAPI){
    this.api=api;
   console.log(this.api.getDefaultMedia())
   
  }
  Console(ev:any){
    console.log(ev)

  }
  ngOnDestroy(){

    this.getSub.unsubscribe()
  }


}
