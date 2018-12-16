import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {
  
  @Input("eventtitle") eventtitle :string;
  @Input("eventContent") eventContent: string;
  
  constructor(public router:Router) { }

  ngOnInit() {
    
 const tokentest = localStorage.getItem('token');
 console.log(tokentest);
 if(tokentest == '1'){
   this.router.navigate(['login'])
   alert('로그인 후 이용해주세요.')
     }
  }

}
