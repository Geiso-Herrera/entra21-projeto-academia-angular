import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes:Array<string> = new Array() 
  nome!:string
  
    constructor() { }
  
    ngOnInit(): void {
      
    }
    deletar(index:number){
      this.clientes.splice(index,1)
  
    }
    adicionar(){
      if(this.nome){
        this.clientes.push(this.nome)
        this.nome= ""
      }
    }
  
  }