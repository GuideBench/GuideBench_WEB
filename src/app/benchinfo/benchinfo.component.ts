import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ListsService } from '../lists.service';
import { ArrayType } from '@angular/compiler';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-benchinfo',
  templateUrl: './benchinfo.component.html',
  styleUrls: ['./benchinfo.component.css']
})
export class BenchinfoComponent implements OnInit {

  public benchs: Bench[] = [];
  public selectedbenchdetail: ArrayType = null;


  constructor(public http:Http, private Lists:ListsService,public router:Router) { }

  ngOnInit() {
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    if(tokentest == '1'){
      this.router.navigate(['login'])
      alert('로그인 후 이용해주세요.')
        }
    this.Lists.getbenchlist().subscribe((benchs)=>{
      console.log(benchs);
      if(benchs !=0){
        this.benchs = benchs.data;
        console.log('모든 오브젝트 값 확인: ', benchs);
      }
      else{
        alert("에러발생삐용삐용");
      }
    });
  }
  public showDetailPage(index: number) {
    this.selectedbenchdetail = this.benchs[index].bench_info;
  }
  
  public back(){
    this.selectedbenchdetail=null;
  }
}

interface Bench{
  bench_name: string,
  bench_longitude: string,
  bench_latitude: string,
  bench_address: string,
  bench_info: ArrayType
  }