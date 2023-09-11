import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';
import { AuricularesComponent } from './auriculares/auriculares.component';
import { CelularesComponent } from './celulares/celulares.component';
import { ComputadorasComponent } from './computadoras/computadoras.component';
import { TabletsComponent } from './tablets/tablets.component';
import { CarritoComponent } from './carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    ProductosComponent,
    RegistroComponent,
    AuricularesComponent,
    CelularesComponent,
    ComputadorasComponent,
    TabletsComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
