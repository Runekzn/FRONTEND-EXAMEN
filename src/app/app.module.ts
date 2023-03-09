import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';
import { EncuestadoComponent } from './pages/encuestado/encuestado.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EncuestaEdicionComponent } from './pages/encuesta/encuesta-edicion/encuesta-edicion.component';
import { HttpClientModule } from '@angular/common/http';


/*ANGULAR MATERIAL */
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { EncuestadoEdicionComponent } from './pages/encuestado/encuestado-edicion/encuestado-edicion.component';
import { SucursalEdicionComponent } from './pages/sucursal/sucursal-edicion/sucursal-edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DarkmodeComponent,
    EncuestadoComponent,
    SucursalComponent,
    EncuestaComponent,
    InicioComponent,
    EncuestaEdicionComponent,
    EncuestadoEdicionComponent,
    SucursalEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
