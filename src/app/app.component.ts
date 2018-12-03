import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guideguide';

  constructor(public router:Router){}
  onclick(){
    document.getElementById('admin').style.display = "none"
    document.getElementById('qna').style.display = "none"
    document.getElementById('event').style.display = "none"
    document.getElementById('benchinfo').style.display = "none"
    document.getElementById('boardinfo').style.display = "none"
    document.getElementById('logout').style.display = "none"
    document.getElementById('login').style.display = "inline-block" //로그인했을때 메뉴바 보이게 하기
    this.router.navigate(['']);
  }
}
