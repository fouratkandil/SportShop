import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  data  from  './shoes.json';

@Component({
  selector: 'app-femme',
  templateUrl: './femme.component.html',
  styleUrls: ['./femme.component.css']
})
export class FemmeComponent implements OnInit {
  chassures:any;

  constructor() { }
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/sport/femme");
    if (rep.ok){
      rep.json().then(data =>{
        this.chassures = data;
        console.log(this.chassures)
      })
    }
  }
}


