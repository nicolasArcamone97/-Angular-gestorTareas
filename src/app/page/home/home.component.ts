import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { TareaComponent } from "../../components/tarea/tarea.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatCheckboxModule, MatMenuModule, TareaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  


  constructor() {}



}
