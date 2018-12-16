import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import {  Router } from '@angular/router';
import { isContentQueryHost } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-qnadetail',
  templateUrl: './qnadetail.component.html',
  styleUrls: ['./qnadetail.component.css']
})
export class QnadetailComponent implements OnInit {
 
  @Input("questionid") questionid: string;
  @Input("questionname") name : string;
  @Input("questiontitle") questiontitle : string;
  @Input("questionContent") questionContent: string;
  @Input("answerContent") answerContent: string;
  
  constructor(private Auth:AuthService, public router:Router) { }

  ngOnInit() {
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    if(tokentest == '1'){
      this.router.navigate(['login'])
      alert('로그인 후 이용해주세요.')
        }
  }

  answer(event) {
    event.preventDefault()
    const target = event.target
    const answer_content = target.querySelector('#answer_content').value
    console.log("질문에 대한 답변 : ", answer_content,"해당 질문의 아이디 값 : " ,this.questionid);
    this.Auth.getanswer(answer_content,this.questionid);
   }
}
