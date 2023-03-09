import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Encuesta } from 'src/app/models/encuesta';
import { EncuestaService } from 'src/app/services/encuesta/encuesta.service';

@Component({
  selector: 'app-encuesta-edicion',
  templateUrl: './encuesta-edicion.component.html',
  styleUrls: ['./encuesta-edicion.component.css']
})
export class EncuestaEdicionComponent implements OnInit{
  form: FormGroup;
  id:number = 0;
  edicion:boolean = false;


  constructor(private route: ActivatedRoute,
    private encuestaService: EncuestaService,
    private router: Router ){
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'pregunta1':new FormControl(''),
      'pregunta2':new FormControl(''),
      'pregunta3':new FormControl(''),
      'pregunta4':new FormControl(''),
      'pregunta5':new FormControl(''),
      'observaciones':new FormControl(''),
      'encuestado':new FormControl(''),
      'sucursal':new FormControl(''),
    });

    this.route.params.subscribe(data => {
      this.id = data['id']
      this.edicion = data['id'] != null;
      this.initForm();
    })
  }
  initForm(){
    if(this.edicion){
      this.encuestaService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id': new FormControl(data.encuestA_ID),
          'pregunta1':new FormControl(data.preguntA1),
          'pregunta2':new FormControl(data.preguntA2),
          'pregunta3':new FormControl(data.preguntA3),
          'pregunta4':new FormControl(data.preguntA4),
          'pregunta5':new FormControl(data.preguntA5),
          'observaciones':new FormControl(data.observaciones),
          'encuestado':new FormControl(data.iD_ENCUESTADO),
          'sucursal':new FormControl(data.iD_SUCURSAL),
        });
      });
    }
  }

  operar(){
    let encuesta = new Encuesta()
    encuesta.encuestA_ID = this.form.get('id').value;
    encuesta.preguntA1 = this.form.get('pregunta1').value;

    encuesta.preguntA2 = this.form.get('pregunta2').value;
    encuesta.preguntA3 = this.form.get('pregunta3').value;

    encuesta.preguntA4 = this.form.get('pregunta4').value;
    encuesta.preguntA5 = this.form.get('pregunta5').value;

    encuesta.observaciones = this.form.get('observaciones').value;
    encuesta.iD_ENCUESTADO = this.form.get('encuestado').value;

    encuesta.iD_SUCURSAL = this.form.get('sucursal').value;

    if(this.edicion){
      this.encuestaService.modificar(encuesta).subscribe(()=>
      {
        this.encuestaService.listar().subscribe(data => {
          this.encuestaService.setEncuestaCambio(data);
          this.encuestaService.setMenajeCambio('Se modifico la encuesta')
        })
      });
    }else{
      this.encuestaService.registrar(encuesta).pipe(switchMap(() => {
        return this.encuestaService.listar();
      })).subscribe(data => {
        this.encuestaService.setEncuestaCambio(data);
        this.encuestaService.setMenajeCambio('se registro la encuesta');
      })
    }

    this.router.navigate(['/encuesta'])
  }

}
