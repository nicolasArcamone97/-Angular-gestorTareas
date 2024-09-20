import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  // verificamos si hay un token guardado en el localSotage
  isLogged():boolean {
    if(this.getToken()){
      return true;
    }
    return false
  }


  // Este método almacena un token en el localStorage bajo la clave 'token'
  setToken(token:string):void {
    localStorage.setItem('token',token)
  }

  //Este método recupera el token almacenado en el localStorage. Si no existe un token, devuelve null
  getToken():string | null {
    return localStorage.getItem('token')
  }

   // Método genérico para obtener el payload decodificado del token
   getPayload(): any | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    try {
      // Decodifica el token completo y retorna el payload
      return jwtDecode(token);
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }

   // Obtener el email del usuario desde el token decodificado
   getEmailUser(): string | null {
    if (!this.isLogged()) {
      return null;
    }

    // Usa el método getPayload para obtener el payload del token
    const payload = this.getPayload();
    if (payload && payload.email) {
      return payload.email;
    }

    return null;
  }

  getUserId(): string | null {
    if (!this.isLogged()) {
      return null;
    }
  
    const payload = this.getPayload();
    if (payload && payload.id) {
      return payload.id
    }
  
    return null;
  }


  logOut(): void {
    localStorage.clear()
  }
  




}
  



