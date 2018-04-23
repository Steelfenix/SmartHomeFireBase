import { Dispositivo } from './../models/dispositivo';
import { DispositivoService } from './../services/dispositivo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent implements OnInit {

  @Input() $key: string;
  @Input() nombre: string;
  @Input() descripcion: string;
  @Input() puerto: string;
  @Input() estado: boolean;

  constructor(private dispositivoService: DispositivoService) { }

  ngOnInit() {
  }

  setDispositivoModel() {
    const dispositivo: Dispositivo = new Dispositivo();
    dispositivo.$key = this.$key;
    dispositivo.descripcion = this.descripcion;
    dispositivo.nombre = this.nombre;
    dispositivo.puerto = this.puerto;
    dispositivo.estado = this.estado;

    this.dispositivoService.actualizarDispositivo(dispositivo);
  }

  onEncender() {
    this.estado = false;
    this.setDispositivoModel();
  }

  onApagar() {
    this.estado = true;
    this.setDispositivoModel();
  }

}
