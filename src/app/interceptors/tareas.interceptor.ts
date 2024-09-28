import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";


// Definición del interceptor como función
export const tareaInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: (req: HttpRequest<any>) => Observable<HttpEvent<any>>): Observable<HttpEvent<any>> => {
  const tokenService = inject(TokenService); // Obtener la instancia del TokenService
  const token = tokenService.getToken();
  
  
  if (!tokenService.isLogged()) {
    console.log('Interceptor: Añadiendo el token', token);
    return next(request)

  }
  // Clonar la solicitud y añadir el encabezado de autorización
  const clonedRequest = request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
    
    return next(clonedRequest);
}
  
