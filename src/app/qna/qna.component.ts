import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent implements OnInit {

  public qnas: QnA[] = [];
  public selectedquestionContent: string = null;
  public selectedanswerContent: string = null;

  constructor(public http:Http, private Lists:ListsService) { }

  ngOnInit() {
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
  this.selectedquestionContent = this.qnas[index].question_content;
  this.selectedanswerContent=  this.qnas[index].answer_content;
}

public back(){
  this.selectedquestionContent=null;
  this.selectedanswerContent=null;
}
}

interface QnA{
question_title: string,
question_content: string,
question_name : string,
answer_content: string
}