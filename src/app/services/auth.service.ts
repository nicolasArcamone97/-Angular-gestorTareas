import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../models/login.dto';
import { RegisterDTO } from '../models/register.dto';
import { enviroment } from '../enviroments/enviroment';
import { TokenDto } from '../models/token.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = enviroment.authURL

  constructor(private httpClient: HttpClient) { }


  login(dto:LoginDTO):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'login',dto)
  }

  register(dto:RegisterDTO):Observable<RegisterDTO>{
    return this.httpClient.post<any>(this.authURL + 'register',dto)
  }


  refresh(dto:TokenDto):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'refresh',dto)
  }


}
