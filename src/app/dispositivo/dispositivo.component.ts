import { NotificacionService } from './../services/notificacion.service';
import { Dispositivo } from './../models/dispositivo';
import { DispositivoService } from './../services/dispositivo.service';
import { Component, OnInit, Input } from '@angular/core';
import { Notificacion } from '../models/notificacion';

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
  @Input() estado: number;
  @Input() tipo: number;

  constructor(
    private dispositivoService: DispositivoService,
    private notificationService: NotificacionService
  ) { }

  ngOnInit() {
  }

  setDispositivoModel() {
    const dispositivo: Dispositivo = new Dispositivo();
    dispositivo.$key = this.$key;
    dispositivo.descripcion = this.descripcion;
    dispositivo.nombre = this.nombre;
    dispositivo.puerto = this.puerto;
    dispositivo.estado = this.estado;
    dispositivo.tipo = this.tipo;

    this.crearNotificacion(dispositivo);
    this.dispositivoService.actualizarDispositivo(dispositivo);
  }

  onEncender() {
    this.estado = 1;
    this.setDispositivoModel();
  }

  onApagar() {
    this.estado = 0;
    this.setDispositivoModel();
  }

  onAuto() {
    this.estado = 2;
    this.setDispositivoModel();
  }

  crearNotificacion(dispositivo: Dispositivo) {
    const notificacion: Notificacion = new Notificacion();

    const fecha = new Date();

    notificacion.hora = fecha.getHours().toString() +
      ': ' + fecha.getMinutes().toString() +
      ': ' + fecha.getSeconds().toString();
    notificacion.fecha = fecha.toLocaleDateString();
    notificacion.nombreDispositivo = dispositivo.nombre;
    notificacion.estado = this.obtenerEstado(dispositivo.estado);

    this.notificationService.agregarNotificacion(notificacion);
  }

  obtenerEstado(estado): string {
    switch (estado) {
      case 0: return 'apagado';
      case 1: return 'encendido';
      case 2: return 'puesto en automatico';
    }
  }

}
