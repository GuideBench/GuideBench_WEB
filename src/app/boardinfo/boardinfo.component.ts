import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-boardinfo',
  templateUrl: './boardinfo.component.html',
  styleUrls: ['./boardinfo.component.css']
})
export class BoardinfoComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    if(tokentest == '1'){
      this.router.navigate(['login'])
      alert('로그인 후 이용해주세요.')
        }
  }

}
