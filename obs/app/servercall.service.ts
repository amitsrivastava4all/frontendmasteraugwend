import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ServercallService {

  constructor(private http:HttpClient) { }

  understand():Observable<number>{
    var c = 1;
    return Observable.create(obs=>{
      setInterval(()=>{
        c++;
        obs.next(c);
      },1000);
    })
    
  }

  getData():Observable<Item[]>{
    return this.http.get<Item[]>('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json');  
  }
}
