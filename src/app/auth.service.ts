import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
@Injectable()
export class AuthService {
  @ViewChild("f")
  form: NgForm;
  constructor(private http: HttpClient, public router: Router) { }

  getlogin(id, pw) {
    //post these details to API server return user info if correct
    return this.http.post('/user/signin', {
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


  
 