import { Injectable } from '@angular/core';
import { Tarea } from '../../app/models/tarea';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private baseUrl = 'http://localhost:3000/tarea'
  private userUrl = 'http://localhost:3000/user'

  constructor(private http:HttpClient,
              private tokenService:TokenService
  ) { }

  public obtenerTareas(): Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.baseUrl,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.getToken()}`
      })
    })
  }

  public obtenerTarea(idTarea:number): Observable<Tarea>{
    return this.http.get<Tarea>(`${this.baseUrl}/${idTarea}`)
  }

  public crearTarea(tarea:Tarea):Observable<void>{
    return this.http.post<void>(`${this.baseUrl}`, tarea)
  }


  public nuevaTarea(tarea:Tarea){
    return this.http.post(`${this.baseUrl}/tarea-usuario/${this.tokenService.getUserId()}`,tarea, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.getToken()}`
      })
    })
  }


  public obtenerTareasUsuario(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.userUrl}/tareas/${this.tokenService.getUserId()}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.getToken()}`
      })
    });
  }

  public obtenerUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.userUrl}/${this.tokenService.getUserId()}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.getToken()}`
      })
    });
  }

}
