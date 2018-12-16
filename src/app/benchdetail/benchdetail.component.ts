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
  
  // @Input("benchinfocategory") benchinfocategory: string;
  // @Input("benchinfoname") benchinfoname: string;
  // @Input("benchinfoaddress") benchinfoaddress: string;
  @Input("benchid") benchid : string;
  @Input("benchname") benchname :string;
  constructor(private Auth:AuthService,public router:Router) { }

  ngOnInit() {
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    if(tokentest == '1'){
      this.router.navigate(['login'])
      alert('로그인 후 이용해주세요.')
        }
  }

  detail(event) {
    event.preventDefault()
    const target = event.target
    const benchinfo_category = target.querySelector('#category').value
    const benchinfo_name = target.querySelector('#name').value
    const benchinfo_address = target.querySelector('#address').value
    console.log(benchinfo_category, benchinfo_name, benchinfo_address, "해당 벤치의 아이디 값 : " ,this.benchid);
    this.Auth.getbenchdetail(benchinfo_category,benchinfo_name,benchinfo_address,this.benchid);
   }

}
