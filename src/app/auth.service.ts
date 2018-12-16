import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router, NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
const BASE_URL = "http://13.124.180.79:3000";

@Injectable()
export class AuthService {
  
  @ViewChild("f")
  form: NgForm;
  constructor(private http: HttpClient, public router: Router) { }

  getlogin(id, pw) {
    //post these details to API server return user info if correct
    return this.http.post(BASE_URL + '/user/signin', {
      id,
      pw
    }).subscribe(data => {
      const token = "0";
      localStorage.setItem('token',token);
      document.getElementById('admin').style.display = "inline-block"
      document.getElementById('qna').style.display = "inline-block"
      document.getElementById('event').style.display = "inline-block"
      document.getElementById('benchinfo').style.display = "inline-block"
      // document.getElementById('boardinfo').style.display = "inline-block"
      document.getElementById('logout').style.display = "inline-block"
      document.getElementById('login').style.display = "none" //로그인했을때 메뉴바 보이게 하기
      const tokentest = localStorage.getItem('token');
      console.log(tokentest);
      const adminid="admin";
      const adminpw="admin";
      localStorage.setItem('adminid',adminid);
      localStorage.setItem('adminpw',adminpw);
      console.log(data, "Login Success")
      this.router.navigate(['']);
      alert("가이드벤치의 관리자님 환영합니다.");
      
    })
  }

  getevent(title, content) {
    this.http.post('/event', {
      title,
      content
    }).subscribe(data => {
      console.log(data, "event등록성공")
      this.router.navigate(['/event']);
    }
    )
  }

  getanswer(content,id) {
    this.http.post('/qna/answer/'+id, {
      content
    }).subscribe(data => {
      console.log(data, "답변달기 완료")
      this.router.navigate(['/qna']);
      alert("답변이 정상적으로 달렸습니다.")
    }
    )
  }
 
  getbench(name,longitude,latitude,address) {
    this.http.post('/bench', {
      name,
      longitude,
      latitude,
      address
    }).subscribe(data => {
      console.log(data, "벤치등록 완료")
      this.router.navigate(['/benchinfo']);
      alert("새로운 벤치가 등록되었습니다.")
    }
    )
  }
 
  getbenchdetail(benchinfo_category,benchinfo_name,benchinfo_address,_id) {
    this.http.post('/bench/'+_id+'/info', {
      benchinfo_category,
      benchinfo_name,
      benchinfo_address
    }).subscribe(data => {
      console.log(data, "벤치별 시장/맛집 등록 완료")
      this.router.navigate(['/benchinfo']);
      alert("새로운 시장/맛집을 추가하셨습니다.")
    }
    )
  }

}


  
 