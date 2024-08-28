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
      },
      {
          "titulo": "Integrar pasarela de pago",
          "descripcion": "Configurar una pasarela de pago para permitir a los usuarios realizar transacciones seguras en el sitio web. Asegurar que los datos de pago se manejen de manera confidencial y segura."
      },
      {
          "titulo": "Diseñar interfaz de usuario responsiva",
          "descripcion": "Crear una interfaz de usuario atractiva y responsiva que se adapte a diferentes tamaños de pantalla. Utilizar CSS y frameworks como Bootstrap o Material Design para lograr un diseño consistente."
      },
      {
          "titulo": "Desarrollar módulo de reportes",
          "descripcion": "Crear un sistema de generación de reportes que permita a los administradores visualizar estadísticas y métricas clave de la aplicación, como el número de usuarios registrados, ventas mensuales y productos más vendidos."
      },
      {
          "titulo": "Optimizar rendimiento de la base de datos",
          "descripcion": "Revisar y optimizar las consultas SQL para mejorar el rendimiento de la base de datos. Implementar índices y otros métodos de optimización para reducir el tiempo de carga de datos."
      },
      {
          "titulo": "Configurar sistema de notificaciones",
          "descripcion": "Implementar un sistema de notificaciones que informe a los usuarios sobre eventos importantes, como actualizaciones de pedidos, promociones o alertas de seguridad. Utilizar correos electrónicos y notificaciones en la aplicación."
      }
  ]
  
  }



}
