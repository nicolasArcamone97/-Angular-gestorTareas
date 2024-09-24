import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";

@Injectable()


export class TareaInterceptor implements HttpInterceptor {
  
  constructor(private tokenService:TokenService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // variable request interceptado que tiene valor request
    let interceptReq = request;

    // obtengo el token
    const token = this.tokenService.getToken()

    // si el token es diferente de null
    if(token != null){
      // interceptReq es un request con el headers añadido
      interceptReq = request.clone({headers: request.headers.set('Authorization','Bearer' + token)});
    }


        return next.handle(request)
  }

}

