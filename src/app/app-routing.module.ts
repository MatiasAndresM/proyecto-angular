import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';
import { AuricularesComponent } from './auriculares/auriculares.component';
import { CelularesComponent } from './celulares/celulares.component';
import { ComputadorasComponent } from './computadoras/computadoras.component';
import { TabletsComponent } from './tablets/tablets.component';
import { CarritoComponent } from './carrito/carrito.component';



const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'auriculares', component: AuricularesComponent},
  {path: 'celulares', component: CelularesComponent},
  {path: 'computadoras', component: ComputadorasComponent},
  {path: 'tablets', component: TabletsComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: "", redirectTo: "/inicio", pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
