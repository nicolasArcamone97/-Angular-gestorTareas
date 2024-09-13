import { Component, Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Tarea } from '../../models/tarea';
import { ColorEnum } from '../../enums/color.enum';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent {
  @Output() colorEnviado = new EventEmitter<string>();
  @Output() tareaEnviada = new EventEmitter<Tarea>();

  colorEnum = ColorEnum;
  colorSeleccionado?: ColorEnum;;
  tarea?:Tarea;

  myForm:FormGroup;

  constructor(private form:FormBuilder) {

    this.myForm = this.form.group({
      titulo: ['', Validators.required],
      descripcion: ['',Validators.required],
      color:['']
    })
  }

  seleccionarColor(color: ColorEnum) {
    this.colorSeleccionado = color;
  }


  enviar() {
    if (!this.colorSeleccionado) {
      this.colorSeleccionado = ColorEnum.blue;
    }
  
    this.tarea = {
      titulo: this.myForm.value.titulo,
      descripcion: this.myForm.value.descripcion,
      color: this.colorSeleccionado 
    };
  
    this.tareaEnviada.emit(this.tarea);
  }

}
