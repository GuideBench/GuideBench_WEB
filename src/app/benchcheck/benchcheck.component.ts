import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-benchcheck',
  templateUrl: './benchcheck.component.html',
  styleUrls: ['./benchcheck.component.css']
})
export class BenchcheckComponent implements OnInit {

  constructor(private Auth:AuthService) { }

  ngOnInit() {
  }

  benchcheck(event) {
    event.preventDefault()
    const target = event.target
    const name = target.querySelector('#name').value
    const longitude = target.querySelector('#longitude').value
    const latitude = target.querySelector('#latitude').value
    const address = target.querySelector('#address').value
    console.log(name,longitude,latitude,address);
      this.Auth.getbench(name,longitude,latitude,address);
   }
}
