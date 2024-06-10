import { Component, OnInit } from '@angular/core';
import  accesoirefemme  from  './accessoire.json';

@Component({
  selector: 'app-accessoirefemme',
  templateUrl: './accessoirefemme.component.html',
  styleUrls: ['./accessoirefemme.component.css']
})
export class AccessoirefemmeComponent implements OnInit {
  accessoire:any;

  constructor() { }
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/sport/accessoires/femme");
    if (rep.ok){
      rep.json().then(data =>{
        this.accessoire = data;
        console.log(this.accessoire)
      })
    }
  }
}