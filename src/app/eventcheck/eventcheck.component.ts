import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-eventcheck',
  templateUrl: './eventcheck.component.html',
  styleUrls: ['./eventcheck.component.css']
})
export class EventcheckComponent implements OnInit {
 

  constructor(private Auth:AuthService, public router:Router) { }

  ngOnInit() {
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    if(tokentest == '1'){
      this.router.navigate(['login'])
      alert('로그인 후 이용해주세요.')
        }
  }

  eventcheck(event) {
    event.preventDefault()
    const target = event.target
    const title = target.querySelector('#title').value
    const content = target.querySelector('#content').value
    console.log(title,content);
      this.Auth.getevent(title, content);
   }
}

