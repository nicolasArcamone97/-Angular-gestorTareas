import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private baseUrl = 'http://localhost:3000/tarea'
 
  constructor(private http:HttpClient) { }

  public obtenerTareas(): Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.baseUrl)
  }

  public obtenerTarea(idTarea:number): Observable<Tarea>{
    return this.http.get<Tarea>(`${this.baseUrl}/${idTarea}`)
  }

  public crearTarea(tarea:Tarea):Observable<void>{
    return this.http.post<void>(`${this.baseUrl}`, tarea)
  }



}
