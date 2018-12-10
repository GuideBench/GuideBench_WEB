import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-qnadetail',
  templateUrl: './qnadetail.component.html',
  styleUrls: ['./qnadetail.component.css']
})
export class QnadetailComponent implements OnInit {
 
  @Input("questionContent") questionContent: string;
  @Input("answerContent") answerContent: string;

  constructor(private Auth:AuthService) { }

  ngOnInit() {
  }

  answer(event) {
    event.preventDefault()
    const target = event.target
    const answer_content = target.querySelector('#answer_content').value
    console.log(answer_content);
    this.Auth.getanswer(answer_content);
   }
}
