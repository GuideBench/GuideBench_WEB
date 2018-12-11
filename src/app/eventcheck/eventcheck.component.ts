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
    const title = target.querySelector('#title').value
    const content = target.querySelector('#content').value
    console.log(title,content);
      this.Auth.getevent(title, content);
   }
}

