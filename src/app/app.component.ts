import { Component,ViewChild,OnInit ,ElementRef } from '@angular/core';
import {Meta ,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 @ViewChild('vr') vr:ElementRef;
  elem:any;
  eframe:any;
 

  constructor(ref:ElementRef,private _meta:Meta, private _title:Title){
   this.elem=ref.nativeElement;
  }
  ngOnInit(){
    this._meta.addTag({name:'dady',content:'Angular 3'})
    this._title.setTitle('Angular Title')
   this.eframe=this.elem.querySelector('a-scene');
  }
 
}
