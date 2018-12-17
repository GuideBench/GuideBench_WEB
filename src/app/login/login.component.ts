import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const id = target.querySelector('#id').value
    const pw = target.querySelector('#pw').value
    console.log(id,pw);
     const token = "no";
     localStorage.setItem('token',token);

     if( id=="adminn"&& pw=="0000" ){
       this.Auth.getlogin(id, pw)
     }
     else{
       alert("관리자 아이디 비밀번호로 로그인해주세요.")
     }
    
    
   }
}
