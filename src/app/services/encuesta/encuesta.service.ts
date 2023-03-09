import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Encuesta } from 'src/app/models/encuesta';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private encuestaCambio: Subject<Encuesta[]> = new Subject<Encuesta[]>();
  private mensajeCambio:Subject<string> = new Subject<string>()
  private url: string = `${environment.HOST}/api/encuesta`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Encuesta[]>(this.url);
  }

  listarPorId(id:number){
    return this.http.get<Encuesta>(`${this.url}/${id}`);
  }

  registrar(encuesta:Encuesta){
    return this.http.post(this.url , encuesta);
  }

  modificar(encuesta:Encuesta){
    return this.http.put(this.url , encuesta);
  }

  eliminar(id:Number){
    return this.http.delete(`${this.url}/${id}`);
  }

  getEncuestaCambio(){
    return this.encuestaCambio.asObservable()
  }

  setEncuestaCambio(lista: Encuesta[]){
    this.encuestaCambio.next(lista)
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable()
  }

  setMenajeCambio(msj: string){
    this.mensajeCambio.next(msj)
  }
}
