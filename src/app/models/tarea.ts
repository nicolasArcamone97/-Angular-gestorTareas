import { ColorEnum } from "../enums/color.enum";

export class Tarea {
    titulo: string
    descripcion: string;
    color: ColorEnum


    constructor(titulo:string,descripcion:string,color:ColorEnum){
        this.titulo = titulo,
        this.descripcion = descripcion,
        this.color = color
    }   

}