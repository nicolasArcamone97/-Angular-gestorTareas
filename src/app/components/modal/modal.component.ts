import { Component, Output,EventEmitter} from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent {
  colorSeleccionado?: string;
  @Output() colorEnviado = new EventEmitter<string>();
  
  constructor() {
   
  }

  seleccionarColor(color: string) {
    this.colorSeleccionado = color;
    this.colorEnviado.emit(this.colorSeleccionado);
    console.log(`Color seleccionado: ${this.colorSeleccionado}`); // Imprimirá el color seleccionado
  }


}
