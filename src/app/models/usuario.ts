import { Tarea } from "./tarea"


export interface Usuario {
    id:number
    nombre: string,
    email:string,
    tareas: Tarea[]
}