import { Component, Input, OnInit } from '@angular/core';
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



export class TareaComponent implements OnInit {
  
  @Input() dataEntrante: any;

  listTarea: Tarea[] = [];


  constructor(){}
  
  ngOnInit(): void {
      
    this.listTarea = [
      {
        descripcion: "Mi primer tarea del dia"
      },
      {
        descripcion: "Mi segunda tarea del dia"
      },
      {
        descripcion: "Mi cuarta tarea del dia"
      }
    ]

  }



}
