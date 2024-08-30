import { Component, Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Tarea } from '../../models/tarea.model';
import { ColorEnum } from '../../enums/color.enum';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent {
  @Output() colorEnviado = new EventEmitter<string>();
  @Output() tareaEnviada = new EventEmitter<Tarea>();

  colorEnum = ColorEnum;
  colorSeleccionado: ColorEnum = ColorEnum.blue;
  tarea?:Tarea;

  myForm:FormGroup;

  constructor(private form:FormBuilder) {

    this.myForm = this.form.group({
      titulo: ['', Validators.required],
      descripcion: ['',Validators.required],
      color:[]
    })
  }

  seleccionarColor(color: ColorEnum) {
    this.colorSeleccionado = color;
    console.log(`Color seleccionado: ${this.colorSeleccionado}`); // Imprimirá el color seleccionado
  }


  enviar() {
    // Si colorSeleccionado es undefined, asigna un valor predeterminado de ColorEnum
    if (!this.colorSeleccionado) {
      this.colorSeleccionado = ColorEnum.blue; // Valor predeterminado o maneja el error de forma adecuada
    }
  
    this.tarea = {
      titulo: this.myForm.value.titulo,
      descripcion: this.myForm.value.descripcion,
      color: this.colorSeleccionado as ColorEnum, // Forzar el tipo si es seguro hacerlo
    };
  
    this.tareaEnviada.emit(this.tarea);
  }

}
