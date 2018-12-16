import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ListsService } from '../lists.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public events: Event[] = [];
  public selectedEventContent: string = null;
  public selectedeventtitle: string= null;

  constructor(public http:Http, private Lists:ListsService, public router:Router){ }

  ngOnInit() {
    console.log('event.component.ts:ngOnInit');
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    if(tokentest == '1'){
      this.router.navigate(['login'])
      alert('로그인 후 이용해주세요.')
        }
    this.Lists.geteventlist().subscribe((events)=>{
      console.log(events);
      if(events !=0){
        this.events = events.message;
        console.log('모든 오브젝트 값 확인: ', events);
      }
      else{
        alert("에러발생삐용삐용");
      }
    });

  }

  public showDetailPage(index: number) {
    this.selectedeventtitle = this.events[index].event_title;
    this.selectedEventContent = this.events[index].event_content;
  }

  public back(){
    this.selectedEventContent=null;
  }
}

interface Event{
  event_title: string,
  event_content: string
}