import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class VideoService {

constructor(private http:Http) { }

getVideo():Observable<any>{
    return this.http.get('http://91.235.136.123:665/restapi/content/getvideo');
}


}
