import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';
import { LoginComponent } from './login/login.component';
import { SegurancaService } from "./seguranca.service";
import { HttpClientModule } from "@angular/common/http";
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PagInicialComponent } from './pag-inicial/pag-inicial.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    DiretivaForComponent,
    LoginComponent,
    FuncionariosComponent,
    ClientesComponent,
    PagInicialComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
