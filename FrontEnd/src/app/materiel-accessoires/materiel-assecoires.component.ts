import { Component, OnInit } from '@angular/core';
import  accessoire  from  './accesoire.json';

@Component({
  selector: 'app-materiel-assecoires',
  templateUrl: './materiel-assecoires.component.html',
  styleUrls: ['./materiel-assecoires.component.css']
})
export class MaterielAssecoiresComponent implements OnInit {
  accessoires:any;

  constructor() { }
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/sport/accessoires");
    if (rep.ok){
      rep.json().then(data =>{
        this.accessoires = data;
        console.log(this.accessoires)
      })
    }
  }
}

