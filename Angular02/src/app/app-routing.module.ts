import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { LoginComponent } from './login/login.component';
import { SegurancaService } from './seguranca.service';

const routes: Routes = [

  {
    path: "diretivaFor/:lista",
    component: DiretivaForComponent

  },
  {
    path: "",
    component: LoginComponent

  },
  {
    path: "funcionarios",
    component: FuncionariosComponent

  },
  {
    path: "clientes",
    component: ClientesComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
