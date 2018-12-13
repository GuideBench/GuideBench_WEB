import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { ArrayType } from '@angular/compiler';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-benchdetail',
  templateUrl: './benchdetail.component.html',
  styleUrls: ['./benchdetail.component.css']
})
export class BenchdetailComponent implements OnInit {
  
  @Input("benchdetail") benchdetail: ArrayType;

  constructor(private Auth:AuthService,public router:Router) { }

  ngOnInit() {
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    if(tokentest == '1'){
      this.router.navigate(['login'])
      alert('로그인 후 이용해주세요.')
        }
  }


}
