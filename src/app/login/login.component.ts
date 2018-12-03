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
    const token = "1";
    localStorage.setItem('token',token);
     this.Auth.getlogin(id, pw)
   }
}
