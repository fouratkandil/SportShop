import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }
  url!:string;
  ngOnInit(): void {
  }
  async add(){
    
    var nom = (<HTMLInputElement>document.getElementById("nom")).value
    var price = (<HTMLInputElement>document.getElementById("price")).value
    var desc = (<HTMLInputElement>document.getElementById("desc")).value
    var genre = (<HTMLInputElement>document.getElementById("genre")).value
    var typebd = (<HTMLInputElement>document.getElementById("typebd")).value
    var image = (<HTMLInputElement>document.getElementById("image")).value
    var body = ` {"genre":"${genre}","nom":"${nom}" , "price":"${price}" ,"desc":"${desc}" ,  "img":"${image}","produit":"${typebd}"}`
    
    const rep = await fetch("http://127.0.0.1:8000/sport/add" , {
      
      method:"POST",
      body :body
    })
    if (rep.ok){
      rep.json().then((data)=>{
        console.log(data)
      })
    }
    
}
}
