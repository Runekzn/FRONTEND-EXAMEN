import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Sucursal } from 'src/app/models/sucursal';
import { SucursalService } from 'src/app/services/sucursal/sucursal.service';


@Component({
  selector: 'app-sucursal-edicion',
  templateUrl: './sucursal-edicion.component.html',
  styleUrls: ['./sucursal-edicion.component.css']
})
export class SucursalEdicionComponent implements OnInit {
  id:number = 0;
  edicion:boolean = false;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private sucursalService: SucursalService,
    private router: Router ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'nombre': new FormControl(''),
      'ciudad': new FormControl(''),
      'provincia': new FormControl(''),
    });

    this.route.params.subscribe(data => {
      this.id = data['id']
      this.edicion = data['id'] != null;
      this.initForm();
    })
  }

  initForm(){
    if(this.edicion){
      this.sucursalService.GetSingleSucursal(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id':new FormControl(data.sucursaL_ID),
          'nombre': new FormControl(data.nombre),
          'ciudad': new FormControl(data.ciudad),
          'provincia': new FormControl(data.provincia),
        });
      });
    }
  }

  operar(){
    let sucursal = new Sucursal();
    sucursal.sucursaL_ID = this.form.get('id').value;
    sucursal.ciudad = this.form.get('ciudad').value;
    sucursal.nombre = this.form.get('nombre').value;
    sucursal.provincia= this.form.get('provincia').value;

    if(this.edicion){

      this.sucursalService.modificar(sucursal).subscribe(()=>{
console.log("sucursal edicion");
        this.sucursalService.GetAllSucursales().subscribe(data => {
          this.sucursalService.setSucursalCambio(data);
          this.sucursalService.setMenajeCambio('Se modifico la sucursal')
        })
      });
    }else{
      this.sucursalService.registrar(sucursal).pipe(switchMap(() => {
        return this.sucursalService.GetAllSucursales();
      })).subscribe(data => {
        this.sucursalService.setSucursalCambio(data);
        this.sucursalService.setMenajeCambio('se registro el encuestado');
      })
    }

    this.router.navigate(['/sucursal'])

  }

}
