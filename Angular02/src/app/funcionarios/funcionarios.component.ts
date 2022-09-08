import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  funcionarios:Array<string> = new Array() 
  nome!:string
  
    constructor() { }
  
    ngOnInit(): void {
      
    }
    deletar(index:number){
      this.funcionarios.splice(index,1)
  
    }
    adicionar(){
      if(this.nome){
        this.funcionarios.push(this.nome)
        this.nome= ""
      }
    }
  
  }
