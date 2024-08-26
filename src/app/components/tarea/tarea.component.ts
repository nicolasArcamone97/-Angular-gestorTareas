import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';


interface Tarea {
  descripcion: string
}

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [RouterOutlet,MatCardModule,MatCheckboxModule,MatMenuModule,CommonModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})



export class TareaComponent {

  listTarea: Tarea[] = [
    {
      descripcion:"Esta es la primer tarea del dia"
    },
    {
      descripcion:"Esta es la segunda tarea del dia"
    },
    {
      descripcion:"Esta es la tercer tarea del dia"
    }
  ]

  constructor(){}
  

}
