import { Component, OnInit } from '@angular/core';
import  vetfemme  from  './vetmentfemme.json';

@Component({
  selector: 'app-vetementfemme',
  templateUrl: './vetementfemme.component.html',
  styleUrls: ['./vetementfemme.component.css']
})
export class VetementfemmeComponent implements OnInit {
  vetement:any;

  constructor() { }
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/sport/vetement/femme");
    if (rep.ok){
      rep.json().then(data =>{
        this.vetement = data;
        console.log(this.vetement)
      })
    }
  }
}