import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isLogged():boolean {
    if(this.getToken()){
      return true;
    }
    return false
  }

  setToken(token:string):void {
    localStorage.setItem('token',token)
  }

  // obtener token del localStorage
  getToken():string | null {
    return localStorage.getItem('token')
  }


  getEmailUser(): string | null {
    // Verifica si el usuario está autenticado
    if (!this.isLogged) {
      return null;
    }
  
    try {
      // Obtén el token
      const token = this.getToken();
      
      // Verifica que el token exista y tenga el formato adecuado
      if (!token || !token.includes('.')) {
        return null;
      }
  
      // Divide el token en partes
      const payload = token.split('.')[1];
  
      // Decodifica el payload del token
      const values = atob(payload);
  
      // Parsea el payload decodificado
      const valueJson = JSON.parse(values);
  
      // Verifica que el payload contenga un email
      if (valueJson && valueJson.email) {
        return valueJson.email;
      } else {
        return null;
      }
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante el procesamiento del token
      console.error('Error al extraer el correo electrónico del token:', error);
      return null;
    }
  }


}
