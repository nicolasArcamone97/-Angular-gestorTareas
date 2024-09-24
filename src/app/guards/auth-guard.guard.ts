import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';


export const authGuardGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService) //inyecta el servicio de token
  const router = inject(Router)

  // verifica si el usuario esta logeado
  if (tokenService.isLogged()){
    return true
  } else{
    router.navigate(['/login']) //redirige a la pagina de inicio de sesion
    return false;
  }
  
};
