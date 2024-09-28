import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { TokenService } from "../services/token.service";
import { AuthService } from "../services/auth.service";


// Definición del interceptor como función
export const authInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: (req: HttpRequest<any>) => Observable<HttpEvent<any>>): Observable<HttpEvent<any>> => {
  const tokenService = inject(TokenService); // Obtener la instancia del TokenService
  const tokenRefresh = inject(AuthService)
  const access_token = tokenService.getToken();
  
  const authRequest = request.clone({
    setHeaders: {
      Authorization: `Bearer  ${access_token}`
    }
  })
  

  return next(authRequest).pipe(
    catchError((err) => {
      return tokenRefresh.refreshToken().pipe(
        switchMap((res) => {
          // guardar el nuevo token obtenedo por el backend
          tokenService.setToken(res.access_token);
  
          // creamos un nuevo clon del request con la nueva cabecera
          const newReq = request.clone({
            setHeaders: {
              Authorization: `Bearer ${res.access_token}`
            }
          });
  
          // retornamos la nueva solicitud
          return next(newReq);
        }),
        catchError((refreshError) => {
          const finalError = new Error(refreshError);
  
          // si hay error, removemos los tokens y hacemos logout
          tokenService.logOut();
  
          return throwError(() => finalError);
        })
      );
    })
  );
};






