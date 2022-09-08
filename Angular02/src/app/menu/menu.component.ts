import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
    linksFun!:Array<any>
    linksCli!:Array<any>


  constructor() { }

  ngOnInit(): void {
    this.linksFun = new Array();
    this.linksCli = new Array();


              this.linksFun.push({

                rota: "funcionarios",
                
                textContent: "Administrar Funcionarios",
                
                cor: "nav-icon far fa-circle text-orange"
                })

                this.linksCli.push({

                  rota: "clientes",
                  
                  textContent: "Administrar Clientes",
                  
                  cor: "nav-icon far fa-circle text-orange"
                  })

                
  }

}
