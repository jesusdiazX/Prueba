import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarArticulosComponent } from './articulos/listar-articulos/listar-articulos.component';
import { ListaClienteComponent } from './Clientes/lista-cliente/lista-cliente.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './admin/guard/guard.component';
import { ArticuloClienteComponent } from './Crud/articulo-cliente/articulo-cliente.component';
import { TiendaComponent } from './tienda/tienda/tienda.component';
import { DetalleComponent } from './tienda/detalle/detalle.component';
import { SucursalComponent } from './Crud/sucursal/sucursal.component';
import { TerminarcompraComponent } from './Crud/terminarcompra/terminarcompra.component';
import { CrudtiendaArticuloComponent } from './crudtienda-articulo/crudtienda-articulo.component';
import { CrudclienteArticuloComponent } from './crudcliente-articulo/crudcliente-articulo.component';


const routes: Routes = [
  { path: 'articulos', pathMatch: 'full', component:ListarArticulosComponent,canActivate: [AuthGuard] },
  { path: 'clientes', pathMatch: 'full',  component:ListaClienteComponent,canActivate: [AuthGuard]},
  { path: 'cliente_articulo', pathMatch: 'full', component:ArticuloClienteComponent,canActivate: [AuthGuard]},
  { path: 'tienda', pathMatch: 'full', component:SucursalComponent,canActivate: [AuthGuard]},
  { path: 'login', pathMatch: 'full', component:LoginComponent},
  { path: 'detalle/:id', pathMatch: 'full', component:DetalleComponent},
  { path: 'compra', pathMatch: 'full', component:TiendaComponent,canActivate: [AuthGuard]},
  { path: 'terminar_compra', pathMatch: 'full', component:TerminarcompraComponent,canActivate: [AuthGuard]},
  { path: 'tienda_articulo', pathMatch: 'full', component:CrudtiendaArticuloComponent,canActivate: [AuthGuard]},
 
   
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
