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


  ngOnInit(){
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);

    if(tokentest == '1'){
      document.getElementById('admin').style.display = "inline-block"
      document.getElementById('qna').style.display = "inline-block"
      document.getElementById('event').style.display = "inline-block"
      document.getElementById('benchinfo').style.display = "inline-block"
      document.getElementById('boardinfo').style.display = "inline-block"
      document.getElementById('logout').style.display = "inline-block"
      document.getElementById('login').style.display = "none" //로그인했을때 메뉴바 보이게 하기
      this.router.navigate(['']);
  
    }
    else{
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
  
  onclick(){
    document.getElementById('admin').style.display = "none"
    document.getElementById('qna').style.display = "none"
    document.getElementById('event').style.display = "none"
    document.getElementById('benchinfo').style.display = "none"
    document.getElementById('boardinfo').style.display = "none"
    document.getElementById('logout').style.display = "none"
    document.getElementById('login').style.display = "inline-block" //로그인했을때 메뉴바 보이게 하기
    const token = "0";
    localStorage.setItem('token',token);
    this.router.navigate(['']);
    
  }
}
