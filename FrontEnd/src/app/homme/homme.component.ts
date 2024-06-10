import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {
chassures:any;

  constructor() { }
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/sport");
    if (rep.ok){
      rep.json().then(data =>{
        this.chassures = data;
        console.log(this.chassures)
      })
    }
  }
}
