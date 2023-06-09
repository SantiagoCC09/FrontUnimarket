/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cuentaIniciada = false;

  constructor() { }

  iniciarSesion() {
    this.cuentaIniciada = true;
  }

  cerrarSesion() {
    this.cuentaIniciada = false;
  }

  estaAutenticado() {
    return this.cuentaIniciada;
  }
}
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioDTO } from '../modelo/usuario-dto';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { SesionDTO } from '../modelo/sesion-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL = "https://proyectofinal-production-e500.up.railway.app/api/auth";
  constructor(private http: HttpClient) { }

  public registrar(usuario: UsuarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registro`, usuario);
  }
  public login(sesion: SesionDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, sesion);
  }

  public logout(){

  }

}
