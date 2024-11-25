import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListaPedidoComponent } from './components/lista-pedido/lista-pedido.component';


@NgModule({
  declarations: [
    PerfilComponent,
    ClienteComponent,
    ListaPedidoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
