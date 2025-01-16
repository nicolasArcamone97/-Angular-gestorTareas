import { Injectable } from '@angular/core';
import { Tarea } from '../../app/models/tarea';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Usuario } from '../models/usuario';
import { ColorEnum } from '../enums/color.enum';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private baseUrl = 'http://localhost:3000/tarea'
  private userUrl = 'http://localhost:3000/user'

  listTareas?: Tarea[]


  constructor(private http:HttpClient,
              private tokenService:TokenService
  ) {

      this.listTareas =  [
        {
          titulo: "Preparar presentación",
          descripcion: "Crear las diapositivas para la reunión del lunes.",
          color: ColorEnum.blue
        },
        {
          titulo: "Revisar código",
          descripcion: "Realizar una revisión del código del módulo de autenticación.",
          color: ColorEnum.green
        },
        {
          titulo: "Enviar informes",
          descripcion: "Enviar los informes trimestrales al departamento de finanzas.",
          color: ColorEnum.yellow
        },
        {
          titulo: "Planificar sprint",
          descripcion: "Organizar las tareas y definir prioridades para el próximo sprint.",
          color: ColorEnum.brown
        },
        {
          titulo: "Actualizar documentación",
          descripcion: "Actualizar la documentación técnica del proyecto.",
          color: ColorEnum.purple
        },
        {
          titulo: "Diseñar página de inicio",
          descripcion: "Crear el diseño de la nueva página de inicio del producto.",
          color: ColorEnum.orange
        }
      ];
   }

  // public obtenerTareas(): Observable<Tarea[]>{
  //   return this.http.get<Tarea[]>(this.baseUrl)
  // }

  public obtenerTareas(){
    return this.listTareas
  }

  public obtenerTarea(idTarea:number): Observable<Tarea>{
    return this.http.get<Tarea>(`${this.baseUrl}/${idTarea}`)
  }

  public crearTarea(tarea:Tarea):Observable<void>{
    return this.http.post<void>(`${this.baseUrl}`, tarea)
  }


  public nuevaTarea(tarea:Tarea){
    return this.http.post(`${this.baseUrl}/tarea-usuario/${this.tokenService.getUserId()}`,tarea)
  }


  public obtenerTareasUsuario(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.userUrl}/tareas/${this.tokenService.getUserId()}`)
  }

  public obtenerUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.userUrl}/${this.tokenService.getUserId()}`)
  }

}
