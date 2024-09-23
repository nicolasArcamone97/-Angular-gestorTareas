import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';


@Injectable({
  providedIn:'root'
})


export class LoginGuard implements CanActivate {

  constructor(private readonly tokenService:TokenService,
              private router:Router
              ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(this.tokenService.isLogged()){
      this.router.navigate(['/home'])
      return false
    }
      return true
  }

}
