import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';
import { Sucursal } from 'src/app/models/sucursal';
import { SucursalService } from 'src/app/services/sucursal/sucursal.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  lista: Sucursal[];
  id2: number;
  filterValue:  Sucursal[] ;
  searchText = '';

  constructor(private sucuralservice: SucursalService,
    private snackBar: MatSnackBar,
    ){}

  ngOnInit(): void {
    this.sucuralservice.GetAllSucursales().subscribe((data) => {
      this.lista = data;
    })

    this.sucuralservice.getSucursalCambio().subscribe((data) => {
      this.lista = data;
    })

    this.sucuralservice.getMensajeCambio().subscribe((data) => {
      this.snackBar.open(data, 'AVISO', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    });

  }

  eliminar(id: number){
    this.id2 = id;
    this.sucuralservice
    .eliminar(this.id2)
    .pipe(
      switchMap(() => {
        return this.sucuralservice.GetAllSucursales()
      })
    )
    .subscribe((data) => {
      this.lista = data;
      this.sucuralservice.setMenajeCambio(
        'Se elimino exitosamente la sucursal'
      );
    });
  }
}
