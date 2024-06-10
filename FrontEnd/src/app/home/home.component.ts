import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  chassures:any;

  constructor() { }
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/sport/meilleur");
    if (rep.ok){
      rep.json().then(data =>{
        this.chassures = data;
        console.log(this.chassures)
      })
    }
  }
}
