import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


   // Verificamos si el token está guardado en localStorage y si estamos en el navegador
   isLogged(): boolean {
    return this.isBrowser() && !!this.getToken();
  }

  // Este método almacena un token en localStorage solo si estamos en el navegador
  setToken(token: string): void {
    if (this.isBrowser()) {
      try {
        localStorage.setItem('access_token', token);
      } catch (error) {
        console.error('Error al almacenar el token:', error);
      }
    }
  }




  // Este método recupera el token del localStorage solo si estamos en el navegador
  getToken(): string | null {
    if (this.isBrowser()) {
      try {
        return localStorage.getItem('access_token');
      } catch (error) {
        console.error('Error al obtener el token:', error);
        return null;
      }
    }
    return null;
  }


  // Recuperar el token de refresh del localStorage
  getRefreshToken(): string | null {
    if (this.isBrowser()) {
      try {
        return localStorage.getItem('refresh_token') || null;
      } catch (error) {
        console.error('Error al obtener el refresh token:', error);
        return null;
      }
    }
    return null;
  }

  setRefreshToken(token: string): void {
    if (this.isBrowser()) {
      try {
        localStorage.setItem('refresh_token', token);
      } catch (error) {
        console.error('Error al almacenar el refresh token:', error);
      }
    }
  }


    // Método para obtener el payload decodificado del token (JWT)
  getPayload(): any | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    try {
      return jwtDecode(token); // Decodificamos el token
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      this.logOut();
      return null;
    }
  }

   
  // Obtener el email del usuario a partir del token decodificado
  getEmailUser(): string | null {
    if (!this.isLogged()) {
      return null;
    }

    const payload = this.getPayload();
    return payload && payload.email ? payload.email : null;
  }



  // Obtener el ID del usuario a partir del token decodificado
  getUserId(): string | null {
    if (!this.isLogged()) {
      return null;
    }

    const payload = this.getPayload();
    return payload && payload.id ? payload.id : null;
  }


  // Método para cerrar sesión: elimina el token y refresh token del localStorage
  logOut(): void {
    if (this.isBrowser()) {
      try {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      } catch (error) {
        console.error('Error al eliminar los tokens:', error);
      }
    }
  }

  // Método auxiliar que verifica si estamos en el entorno del navegador
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }


}
  



