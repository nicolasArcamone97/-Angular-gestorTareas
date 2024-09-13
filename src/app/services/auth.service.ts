import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../models/login.dto';
import { RegisterDTO } from '../models/register.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL:string = 'http://localhost:3000/auth/'

  constructor(private httpClient: HttpClient) { }


  login(dto:LoginDTO):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'login',dto)
  }

  register(dto:RegisterDTO):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'register',dto)
  }




}
