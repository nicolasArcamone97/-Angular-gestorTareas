import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { TareaComponent } from "../../components/tarea/tarea.component";
import { Tarea } from '../../models/tarea.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatCheckboxModule, MatMenuModule, TareaComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  listTarea: Tarea[] = [];
  
  listCompletadas: Tarea[] = []

  tareaSelected?: Tarea;

  constructor() {}

  ngOnInit(): void {
    this.listTarea = [
      {
          "titulo": "Desarrollar formulario de registro de usuarios",
          "descripcion": "Crear un formulario de registro que permita a los usuarios ingresar sus datos personales como nombre, correo electrónico y contraseña. Validar los campos para asegurar que la información ingresada sea correcta."
      },
      {
          "titulo": "Implementar autenticación de usuarios",
          "descripcion": "Configurar un sistema de autenticación que permita a los usuarios iniciar sesión con su correo electrónico y contraseña. Utilizar un token JWT para mantener la sesión activa."
      },
      {
          "titulo": "Crear un sistema de gestión de productos",
          "descripcion": "Desarrollar un módulo que permita a los administradores agregar, modificar, eliminar y consultar productos en la base de datos. Incluir campos como nombre del producto, descripción, precio y categoría."
      }
  ]

  this.listCompletadas = [
    {
        "titulo": "Desarrollar formulario de registro de usuarios",
        "descripcion": "Crear un formulario de registro que permita a los usuarios ingresar sus datos personales como nombre, correo electrónico y contraseña. Validar los campos para asegurar que la información ingresada sea correcta."
    }
  ]

  
  }


  recibirTarea(tarea:Tarea){
    this.listCompletadas.push(tarea)    
  }



}
