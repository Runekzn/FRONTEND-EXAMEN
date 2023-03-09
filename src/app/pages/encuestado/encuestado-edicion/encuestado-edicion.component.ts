import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Encuestado2 } from 'src/app/models/encuestado';
import { EncuestadoService } from 'src/app/services/encuestado/encuestado.service';

@Component({
  selector: 'app-encuestado-edicion',
  templateUrl: './encuestado-edicion.component.html',
  styleUrls: ['./encuestado-edicion.component.css']
})
export class EncuestadoEdicionComponent implements OnInit {
  id:number = 0;
  edicion:boolean = false;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private encuestadoService: EncuestadoService,
    private router: Router ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'ci': new FormControl(''),
      'nombre': new FormControl(''),
      'sexo': new FormControl(''),
      'edad': new FormControl(''),
    });

    this.route.params.subscribe(data => {
      this.id = data['id']
      this.edicion = data['id'] != null;
      this.initForm();
    })
  }

  initForm(){
    if(this.edicion){
      this.encuestadoService.GetSingleEncuestados(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id':new FormControl(data.iD_ENCUESTADO),
          'ci': new FormControl(data.ci),
          'nombre': new FormControl(data.nombre),
          'sexo': new FormControl(data.sexo),
          'edad': new FormControl(data.edad),
        });
      });
    }
  }

  operar(){
    let encuestado = new Encuestado2()
    encuestado.iD_ENCUESTADO = this.form.get('id').value;
    encuestado.ci = this.form.get('ci').value;
    encuestado.nombre = this.form.get('nombre').value;
    encuestado.sexo = this.form.get('sexo').value;
    encuestado.edad = this.form.get('edad').value;

    if(this.edicion){
      this.encuestadoService.UpdateEncuestado(encuestado).subscribe(()=>
      {
        this.encuestadoService.GetAllEncuestado().subscribe(data => {
          this.encuestadoService.setEncuestadoCambio(data);
          this.encuestadoService.setMenajeCambio('Se modifico el encuestado')
        })
      });
    }else{
      this.encuestadoService.AddEncuestados(encuestado).pipe(switchMap(() => {
        return this.encuestadoService.GetAllEncuestado();
      })).subscribe(data => {
        this.encuestadoService.setEncuestadoCambio(data);
        this.encuestadoService.setMenajeCambio('se registro el encuestado');
      })
    }

    this.router.navigate(['/encuestado'])
  }
}
