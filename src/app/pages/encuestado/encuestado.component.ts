import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';
import { Encuestado2 } from 'src/app/models/encuestado';
import { EncuestadoService } from 'src/app/services/encuestado/encuestado.service';



@Component({
  selector: 'app-encuestado',
  templateUrl: './encuestado.component.html',
  styleUrls: ['./encuestado.component.css']
})
export class EncuestadoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  lista: Encuestado2[];
  id2: number;
  filterValue:  Encuestado2[] ;
  searchText = '';

  constructor(private encuestadoservice: EncuestadoService,
    private snackBar: MatSnackBar,
    ){}

  ngOnInit(): void {
    this.encuestadoservice.GetAllEncuestado().subscribe((data) => {
      this.lista = data;

      console.log(this.lista);
       console.log(data)
    })

    this.encuestadoservice.getEncuestadoCambio().subscribe((data) => {
      this.lista = data;
    })

    this.encuestadoservice.getMensajeCambio().subscribe((data) => {
      this.snackBar.open(data, 'AVISO', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    });

  }

  eliminar(id: number){
    this.id2 = id;
    this.encuestadoservice
    .DeleteEncuestado(this.id2)
    .pipe(
      switchMap(() => {
        return this.encuestadoservice.GetAllEncuestado()
      })
    )
    .subscribe((data) => {
      this.lista = data;
      this.encuestadoservice.setMenajeCambio(
        'Se elimino exitosamente el registro'
      );
    });
  }


}
