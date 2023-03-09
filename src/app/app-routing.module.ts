import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';
import { EncuestadoComponent } from './pages/encuestado/encuestado.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EncuestaEdicionComponent } from './pages/encuesta/encuesta-edicion/encuesta-edicion.component';
import { EncuestadoEdicionComponent } from './pages/encuestado/encuestado-edicion/encuestado-edicion.component';
import { SucursalEdicionComponent } from './pages/sucursal/sucursal-edicion/sucursal-edicion.component';
const routes: Routes = [

  { path: '', component: EncuestaComponent },
  {
    path: 'encuestado',
    component: EncuestadoComponent,
    children: [
      { path: 'encuestado-nuevo', component: EncuestadoEdicionComponent },
      { path: 'encuestado-edicion/:id',component:EncuestadoEdicionComponent}
    ],
  },
  {
    path: 'encuesta',
    component: EncuestaComponent,
    children: [
      { path: 'encuesta-nuevo', component: EncuestaEdicionComponent },
      { path: 'encuesta-edicion/:id',component:EncuestaEdicionComponent}
    ],
  },
  {
    path: 'sucursal',
    component: SucursalComponent,
    children: [
      { path: 'sucursal-nuevo', component: SucursalEdicionComponent },
      { path: 'sucursal-edicion/:id',component:SucursalEdicionComponent}
    ],
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
