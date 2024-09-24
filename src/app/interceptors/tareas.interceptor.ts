import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";


// Definición del interceptor como función
export const tareaInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: (req: HttpRequest<any>) => Observable<HttpEvent<any>>): Observable<HttpEvent<any>> => {
  const tokenService = inject(TokenService); // Obtener la instancia del TokenService
  const token = tokenService.getToken();
  
  // Confirmar que el token no sea null
  if (token) {
    console.log('Interceptor: Añadiendo el token', token);
    
    // Clonar la solicitud y añadir el encabezado de autorización
    const clonedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return next(clonedRequest);
  }
  
  console.log('Interceptor: No se añadió el token');
  
  // Si no hay token, pasar la solicitud original sin modificar
  return next(request);
};
