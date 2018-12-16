import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ListsService } from '../lists.service';
import {  Router } from '@angular/router';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent implements OnInit {

  public qnas: QnA[] = [];
  public selectedquestionContent: string = null;
  public selectedanswerContent: string = null;
  public selectedquestionid: string = null;

  constructor(public http:Http, private Lists:ListsService, public router:Router) { }

  ngOnInit() {
    const tokentest = localStorage.getItem('token');
    console.log(tokentest);
    if(tokentest == '1'){
      this.router.navigate(['login'])
      alert('로그인 후 이용해주세요.')
        }
    this.Lists.getqnalist().subscribe((qnas)=>{
      console.log(qnas);
      if(qnas !=0){
        this.qnas = qnas.data;
        console.log('모든 오브젝트 값 확인: ', qnas);
      }
      else{
        alert("에러발생삐용삐용");
      }
    });
  }

public showDetailPage(index: number) {
  this.selectedquestionid = this.qnas[index]._id;
  this.selectedquestionContent = this.qnas[index].question_content;
  this.selectedanswerContent=  this.qnas[index].answer_content;
}

public back(){
  this.selectedquestionContent=null;
  this.selectedanswerContent=null;
}
}

interface QnA{
  _id:string,
question_title: string,
question_content: string,
question_name : string,
answer_content: string
}

