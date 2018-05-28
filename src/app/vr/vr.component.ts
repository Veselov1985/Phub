import { Component, OnInit } from '@angular/core';
import {VgAPI} from 'videogular2/core'

@Component({
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.css']
})
export class VrComponent implements OnInit {
  preload:string = 'auto';
  api:VgAPI;
  dashBitrates:any;
  url:string='http://91.235.136.123:665/restapi/content/getvideo';

  constructor() { }

  ngOnInit() {
  }

  onPlayerReady(api:VgAPI){
    this.api=api;
   console.log(this.api.getDefaultMedia())
   
  }
  Console(){
    console.log(this.dashBitrates)

  }


}
