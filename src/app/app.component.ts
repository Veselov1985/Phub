import { Component,ViewChild,OnInit ,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 @ViewChild('vr') vr:ElementRef;
  elem:any;
  eframe:any;
 

  constructor(ref:ElementRef){
   this.elem=ref.nativeElement;
  }
  ngOnInit(){
   this.eframe=this.elem.querySelector('a-scene');
  }
 
}
