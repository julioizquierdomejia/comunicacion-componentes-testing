import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() textoHijo = "Texto desde el hijo";
  @Output() textoHijoOut = new EventEmitter<string>();

  cambiarHijo(){
    this.textoHijo = "Nuevo texto desde el hijo";
    this.textoHijoOut.emit(this.textoHijo);
  }

}
