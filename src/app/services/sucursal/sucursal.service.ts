import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sucursal } from 'src/app/models/sucursal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  private sucursalCambio: Subject<Sucursal[]> = new Subject<Sucursal[]>();
  private mensajeCambio: Subject<string> = new Subject<string>();
  private url: string = `${environment.HOST}/api/sucursales`;

  constructor(private http: HttpClient) { }


  GetAllSucursales(){
    return this.http.get<Sucursal[]>(this.url);
  }

  GetSingleSucursal(id:number){
    return this.http.get<Sucursal>(`${this.url}/${id}`);
  }

  registrar(sucursal:Sucursal){
    return this.http.post(this.url , sucursal);
  }

  modificar(sucursal:Sucursal){
    return this.http.put(this.url , sucursal);
  }

  eliminar(id:Number){
    return this.http.delete(`${this.url}/${id}`);
  }

  getSucursalCambio(){
    return this.sucursalCambio.asObservable()
  }

  setSucursalCambio(lista: Sucursal[]){
    console.log("sucursal cambio")
    this.sucursalCambio.next(lista)
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable()
  }

  setMenajeCambio(msj: string){
    this.mensajeCambio.next(msj)
  }
}
