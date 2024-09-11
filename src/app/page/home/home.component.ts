import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { TareaComponent } from "../../components/tarea/tarea.component";
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../../components/modal/modal.component";
import { TareaService } from '../../services/tarea.service';
import {DragDropModule} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatCheckboxModule, MatMenuModule, TareaComponent, CommonModule, ModalComponent,DragDropModule],
  providers:[TareaService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  listTarea: Tarea[] = [];
  
  listCompletadas: Tarea[] = []

  tareaSelected?: Tarea;


  constructor(private _tareaService:TareaService) {}

  ngOnInit(): void {
    this.obtenerTareas()
  }


  obtenerTareas(){
    this._tareaService.obtenerTareas().subscribe((data:Tarea[]) => {
      this.listTarea = data
    })
   
  }



  recibirTarea(tarea:Tarea){
    this._tareaService.crearTarea(tarea).subscribe(() => {console.log("Tarea agregada")
      this.obtenerTareas()
    })  
    
  }



}
