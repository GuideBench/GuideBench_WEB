import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ListsService } from '../lists.service';

import {  Router } from '@angular/router';

@Component({
  selector: 'app-benchinfo',
  templateUrl: './benchinfo.component.html',
  styleUrls: ['./benchinfo.component.css']
})
export class BenchinfoComponent implements OnInit {

  public benchs: Bench[] = [];
  public details: Detail[] = [];
  public selectedbenchid: string =null;
  public selectedbenchinfocategory: string = null;
  public selectedbenchinfoname: string = null;
  public selectedbenchinfoaddress: string = null;
  public selectedbenchname:string = null;


  constructor(public http:Http, private Lists:ListsService,public router:Router) {
    
   }

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
        console.log('모든 벤치 값 확인: ', benchs);
      }
      else{
        alert("에러발생삐용삐용");
      }
    });

    //   this.Lists.getbenchdetaillist(this.selectedbenchid).subscribe((details)=>{
    //   console.log(details);
    //   if(details !=0){
    //     this.details = details.data;
    //     console.log('모든 시장/맛집 값 확인: ', details);
    //   }
    //   else{
    //     alert("에러발생삐용삐용");
    //   }
    // });
 
   
  }

  public showDetailPage(index) {
   
    this.selectedbenchid = this.benchs[index]._id;
  
    console.log(this.selectedbenchid)
    console.log( 'index::::::::::::',index)
    this.Lists.getbenchdetaillist(this.selectedbenchid).subscribe((details)=>{
      console.log(details);
      if(details !=0){
        this.details = details.data;
        console.log('모든 시장/맛집 값 확인: ', details);
        console.log('this.details: ',this.details)
      }
      else{
        alert("에러발생삐용삐용");
      }
    });
    this.selectedbenchname = this.benchs[index].bench_name;
    this.selectedbenchinfocategory = 'a'
    this.selectedbenchinfoname='a'
    this.selectedbenchinfoaddress='a'
  }
  
  public back(){
    this.selectedbenchinfocategory = null;
    this.selectedbenchinfoname = null;
    this.selectedbenchinfoaddress = null;
  }
  }


interface Bench{
  _id:string,
  bench_name: string,
  bench_longitude: string,
  bench_latitude: string,
  bench_address: string

  }

interface Detail{
  benchinfo_category: string,
  benchinfo_name: string,
  benchinfo_address: string
}