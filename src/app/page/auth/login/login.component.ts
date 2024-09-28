import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginDTO } from '../../../models/login.dto';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TokenService } from '../../../services/token.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink,ReactiveFormsModule],
  providers:[AuthService,TokenService,HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  // validadion de mail con expresion regular
  emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  myForm:FormGroup;

  usuario?:LoginDTO;

  constructor(private authService:AuthService,
              private formBuilder:FormBuilder,
              private tokenService:TokenService,
              private router:Router,
             
  ){
    this.myForm = this.formBuilder.group({
       email: ['', [Validators.required, Validators.pattern(this.emailValidation)]],
      password: ['',[Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit(): void {
    // Ciclo de vida correcto
  }

  onLogin(): void {
    if (this.myForm.valid) {
      const { email, password } = this.myForm.value; // Obtener los valores del formulario
      this.usuario = new LoginDTO(email, password); // crear el dto del login

      // llamada al servicio de autencicacion
      this.authService.login(this.usuario).subscribe(
        (response) => {
          console.log('Login exitoso:', response);

          // verificar si el response tiene los tokens
          if(response.access_token && response.refresh_token){
            //guardar los tokens
            this.tokenService.setToken(response.access_token)
            this.tokenService.setRefreshToken(response.refresh_token)

            // redirigir a la pagina de inicio
            this.router.navigate(['home'])
          }else {
            console.log("No se recibieron los tokens necesarios")
          }
        } ,
      );
    } else {
      console.error('Formulario inválido');
    }
  }     
 





}
