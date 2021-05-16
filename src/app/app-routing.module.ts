import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasComponent } from './component/caracteristicas/caracteristicas.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NoFoundComponent } from './component/no-found/no-found.component';
import { ServiciosComponent } from './component/servicios/servicios.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pagina-principal',component: HomeComponent},
  {path: 'caracteristicas', component: CaracteristicasComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'contactanos', component: ContactComponent},
  {path: '**', component: NoFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
