import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-eventcheck',
  templateUrl: './eventcheck.component.html',
  styleUrls: ['./eventcheck.component.css']
})
export class EventcheckComponent implements OnInit {
 

  constructor(private Auth:AuthService) { }

  ngOnInit() {
  }

  // submit(){
  //   console.log(this.form.value);
  //   this.httpClient.post('/event',
  //   this.form.value).subscribe();
  // }

  eventcheck(event) {
    event.preventDefault()
    const target = event.target
    const event_title = target.querySelector('#event_title').value
    const event_content = target.querySelector('#event_content').value
    console.log(event_title,event_content);
      this.Auth.getevent(event_title, event_content);
   }
}

