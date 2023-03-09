import { Component, OnInit } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta/encuesta.service';
import { Encuesta } from 'src/app/models/encuesta';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';




@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit{
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  lista: Encuesta[];
  id2: number;
  filterValue:  Encuesta[] ;


  inputText = '';


  constructor(private encuestaservice: EncuestaService,
    private snackBar: MatSnackBar,
    ){}

  ngOnInit(): void {
    this.encuestaservice.listar().subscribe((data) => {
      this.lista = data;

      console.log(this.lista);
       console.log(data)
    })

    this.encuestaservice.getEncuestaCambio().subscribe((data) => {
      this.lista = data;
    })

    this.encuestaservice.getMensajeCambio().subscribe((data) => {
      this.snackBar.open(data, 'AVISO', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    });

  }



  eliminar(id: number){
    this.id2 = id;
    this.encuestaservice
    .eliminar(this.id2)
    .pipe(
      switchMap(() => {
        return this.encuestaservice.listar()
      })
    )
    .subscribe((data) => {
      this.lista = data;
      this.encuestaservice.setMenajeCambio(
        'Se elimino exitosamente el registro'
      );
    });
  }
}
