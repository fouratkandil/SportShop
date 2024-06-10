import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  async delete(){
    var typebd= (<HTMLInputElement>document.getElementById("typebd")).value
    var id = (<HTMLInputElement>document.getElementById("id")).value
    
  
    var body = ` {"produit":"${typebd}","id":"${id}" }`
    
    const rep = await fetch("http://127.0.0.1:8000/sport/del" , {
      
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
