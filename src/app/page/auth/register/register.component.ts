import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterDTO } from '../../../models/register.dto';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // validadion de mail con expresion regular
  emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  myForm:FormGroup;

  usuarioRegister?:RegisterDTO;

  constructor(private form:FormBuilder,  
              private authService:AuthService){

    this.myForm = this.form.group({
      nombre:['',Validators.required],
      email:['', [Validators.required, Validators.pattern(this.emailValidation)]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }


  ngOnInit(){}



  onRegister(){
    if(this.myForm.valid){
      const { nombre, email, password } = this.myForm.value;
      this.usuarioRegister = {
        nombre: nombre,
        email: email,
        password: password
      }
      this.authService.register(this.usuarioRegister).subscribe((data) => {
      console.log(data, "Register Exitoso");
    });
    } else {
      console.log("Formulario invalido",this.myForm.errors)
    }
  }



}
