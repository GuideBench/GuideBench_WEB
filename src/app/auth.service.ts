import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, NavigationExtras } from '@angular/router';

@Injectable()
export class AuthService {

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

  getevent(event_title, event_content) {
    return this.http.post('/event', {
      event_title,
      event_content
    }).subscribe(data => {
      console.log(data, "event등록성공")
      this.router.navigate(['/event']);
    })
  }
}


  
 