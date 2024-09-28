import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../models/login.dto';
import { RegisterDTO } from '../models/register.dto';
import { enviroment } from '../enviroments/enviroment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = enviroment.authURL

  constructor(private httpClient: HttpClient,
              private tokenService:TokenService
  ) { }


  login(dto:LoginDTO):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'login',dto)
  }

  register(dto:RegisterDTO):Observable<RegisterDTO>{
    return this.httpClient.post<any>(this.authURL + 'register',dto)
  }

  refreshToken(){
    const refresh_token = this.tokenService.getRefreshToken()
    return this.httpClient.post<any>(`${this.authURL}/refresh`, refresh_token )
  }



}
