import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { Usuario } from '../../models/usuario';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  providers:[TokenService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  usuarioSelected?: Usuario;

  constructor(private tokenService:TokenService,
              private tareaService:TareaService
  ){}


  ngOnInit(){
    this.usuarioSesion()
  }

  cerrarSesion(){
    this.tokenService.logOut()
  }

  usuarioSesion(){
    this.tareaService.obtenerUsuario().subscribe((data) => {
      this.usuarioSelected = data
    })
  }

  

}
