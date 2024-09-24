import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class LoginComponent {

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

  ngOninit(){
    
  }
  onLogin(): void {
    if (this.myForm.valid) {
      const { email, password } = this.myForm.value; // Obtener los valores del formulario
      this.usuario = new LoginDTO(email, password); 
      this.authService.login(this.usuario).subscribe(
        (response) => {
          console.log('Login exitoso:', response);
          if(!response.token){
            console.log("No hay token")
          }
          this.tokenService.setToken(response.token)
          this.router.navigate(['home'])
          
        },
      );
    } else {
      console.error('Formulario inválido');
    }
  }     
 





}
