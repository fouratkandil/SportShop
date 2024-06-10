import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html',
  styleUrls: ['./vetements.component.css']
})
export class VetementsComponent implements OnInit {
  vetement:any;

  constructor() { }
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/sport/vetement");
    if (rep.ok){
      rep.json().then(data =>{
        this.vetement = data;
        console.log(this.vetement)
      })
    }
  }
}