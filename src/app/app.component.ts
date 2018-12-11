import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GuideBench';

  constructor(public router:Router, private cookieService : CookieService){}


  ngOnInit(){
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    const adminlogin = localStorage.getItem('adminid,adminpw');
    console.log(adminlogin);
    if(tokentest == '0' && adminlogin=='admin,admin'){
      document.getElementById('admin').style.display = "inline-block"
      document.getElementById('qna').style.display = "inline-block"
      document.getElementById('event').style.display = "inline-block"
      document.getElementById('benchinfo').style.display = "inline-block"
      // document.getElementById('boardinfo').style.display = "inline-block"
      document.getElementById('logout').style.display = "inline-block"
      document.getElementById('login').style.display = "none" //로그인했을때 메뉴바 보이게 하기
      this.router.navigate(['']);
    }
    else{
      document.getElementById('admin').style.display = "none"
      document.getElementById('qna').style.display = "none"
      document.getElementById('event').style.display = "none"
      document.getElementById('benchinfo').style.display = "none"
      // document.getElementById('boardinfo').style.display = "none"
      document.getElementById('logout').style.display = "none"
      document.getElementById('login').style.display = "inline-block" //로그아웃했을때 메뉴바 보이게 하기
      this.router.navigate(['']);
    }
  }
  
  onclick(){
    document.getElementById('admin').style.display = "none"
    document.getElementById('qna').style.display = "none"
    document.getElementById('event').style.display = "none"
    document.getElementById('benchinfo').style.display = "none"
    document.getElementById('boardinfo').style.display = "none"
    document.getElementById('logout').style.display = "none"
    document.getElementById('login').style.display = "inline-block" //로그아웃했을때 메뉴바 보이게 하기
    const token = '1';
    localStorage.setItem('token',token);
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    this.router.navigate(['']);
    console.log("logout success");
  }

  
}
