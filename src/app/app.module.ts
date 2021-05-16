import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { CaracteristicasComponent } from './component/caracteristicas/caracteristicas.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { NoFoundComponent } from './component/no-found/no-found.component';
import { ContactComponent } from './component/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CaracteristicasComponent,
    ServiciosComponent,
    NoFoundComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
