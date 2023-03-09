import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Encuestado2 } from 'src/app/models/encuestado';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestadoService {

  private encuestadoCambio: Subject<Encuestado2[]> = new Subject<Encuestado2[]>();
  private mensajeCambio: Subject<string> = new Subject<string>();
  private url: string = `${environment.HOST}/api/encuestado`;

  constructor(private http: HttpClient) { }

  GetAllEncuestado(){
    return this.http.get<Encuestado2[]>(this.url);
  }

  GetSingleEncuestados(id:number){
    return this.http.get<Encuestado2>(`${this.url}/${id}`);
  }

  AddEncuestados(encuestado:Encuestado2){
    return this.http.post(this.url , encuestado);
  }

  UpdateEncuestado(encuestado:Encuestado2){
    console.log("update sservice encuetado" + encuestado+ this.url);
    return this.http.put(this.url , encuestado);
  }

  DeleteEncuestado(id:Number){
    console.log("delete service encuestado"+`${this.url}/${id}`);
    return this.http.delete(`${this.url}/${id}`);
  }

  getEncuestadoCambio(){
    return this.encuestadoCambio.asObservable()
  }

  setEncuestadoCambio(lista: Encuestado2[]){
    this.encuestadoCambio.next(lista)
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable()
  }

  setMenajeCambio(msj: string){
    this.mensajeCambio.next(msj)
  }
}
