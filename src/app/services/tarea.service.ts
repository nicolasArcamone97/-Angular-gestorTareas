import { Injectable } from '@angular/core';
import { Tarea } from '../../app/models/tarea';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private baseUrl = 'http://localhost:3000/tarea'
 
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



}
