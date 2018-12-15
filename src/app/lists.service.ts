import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
const BASE_URL = "http://13.124.180.79:3000";

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(public http:Http) { }

  geteventlist(){
    return this.http.get(BASE_URL + '/event/getevent')
      .pipe(map(res=> {
        console.log(res);
        return res.json();
      }));
  }

  getuserlist(){
    return this.http.get(BASE_URL + '/user/getuser')
      .pipe(map(res=> {
        console.log(res);
        return res.json();
      }));
  }
  
  getqnalist(){
    return this.http.get(BASE_URL + '/qna/getqna')
      .pipe(map(res=> {
        console.log(res);
        return res.json();
      }));
  }

  getbenchlist(){
    return this.http.get(BASE_URL + '/bench/getAllinfo')
      .pipe(map(res=> {
        console.log(res);
        return res.json();
      }));
  }

  getbenchdetaillist(id){
    return this.http.get(BASE_URL + '/bench/'+ id +'/getInfo')
      .pipe(map(res=> {
        console.log(res);
        console.log(BASE_URL + '/bench/'+ id +'/getInfo')
        return res.json();
      }));
  }
  
}
