import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-benchinfo',
  templateUrl: './benchinfo.component.html',
  styleUrls: ['./benchinfo.component.css']
})
export class BenchinfoComponent implements OnInit {

  public benchs: Bench[] = [];
  // public selectedquestionContent: string = null;
  // public selectedanswerContent: string = null;

  constructor(public http:Http, private Lists:ListsService) { }

  ngOnInit() {
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
  // public showDetailPage(index: number) {
  //   this.selectedquestionContent = this.qnas[index].question_content;
  //   this.selectedanswerContent=  this.qnas[index].answer_content;
  // }
  
  // public back(){
  //   this.selectedquestionContent=null;
  //   this.selectedanswerContent=null;
  // }
}

interface Bench{
  bench_name: string,
  bench_longitude: string,
  bench_latitude: string,
  bench_address: string
  }