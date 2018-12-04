import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router, NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
const BASE_URL = "http://13.124.180.79:3000";

@Injectable()
export class AuthService {
  
  @ViewChild("f")
  form: NgForm;
  constructor(private http: HttpClient, public router: Router) { }

  getlogin(id, pw) {
    //post these details to API server return user info if correct
    return this.http.post(BASE_URL + '/user/signin', {
      id,
      pw
    }).subscribe(data => {
      document.getElementById('admin').style.display = "inline-block"
      document.getElementById('qna').style.display = "inline-block"
      document.getElementById('event').style.display = "inline-block"
      document.getElementById('benchinfo').style.display = "inline-block"
      document.getElementById('boardinfo').style.display = "inline-block"
      document.getElementById('logout').style.display = "inline-block"
      document.getElementById('login').style.display = "none" //로그인했을때 메뉴바 보이게 하기
      const token = "0";
      localStorage.setItem('token',token);
      const tokentest = localStorage.getItem('token');
      console.log(tokentest);
      const adminid="admin";
      const adminpw="admin";
      localStorage.setItem('adminid',adminid);
      localStorage.setItem('adminpw',adminpw);
      console.log(data, "Login Success")
      this.router.navigate(['']);
    })
  }

  getevent(title, content) {
    this.http.post('/event', {
      title,
      content
    }).subscribe(data => {
      console.log(data, "event등록성공")
      this.router.navigate(['/event']);
    }
    )
  }

 
}


  
 