import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ListsService } from '../lists.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  public users: User[] =[];

  constructor(public http:Http, private Lists:ListsService,public router:Router) { }

  ngOnInit() {
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    if(tokentest == '1'){
      this.router.navigate(['login'])
      alert('로그인 후 이용해주세요.')
        }
    this.Lists.getuserlist().subscribe((users)=>{
      console.log(users);
      if(users!=0){
        this.users = users.data;
        console.log('모든 오브젝트 값 확인: ', users);
      }
      else{
        alert("에러발생삐용삐용");
      }
    });
  }

}

interface User{
  user_id : string,
  user_pw : string,
  user_name : string
}