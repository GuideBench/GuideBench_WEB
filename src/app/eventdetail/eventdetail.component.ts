import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {

  @Input("eventContent") eventContent: string;
  constructor() { }

  ngOnInit() {
  }

}
