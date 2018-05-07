import { NotificacionService } from './../services/notificacion.service';
import { DispositivoService } from './../services/dispositivo.service';
import { Dispositivo } from './../models/dispositivo';
import { Component, OnInit } from '@angular/core';
import { Notificacion } from '../models/notificacion';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css']
})
export class ElementosComponent implements OnInit {

  dispositivoList: Dispositivo[];
  notificacionList: Notificacion[];
  interval;

  deshabilitado = true;

  constructor(
    private dispositivoService: DispositivoService,
    private notificationService: NotificacionService
  ) { }

  ngOnInit() {
    this.consultarDispositivos();
    this.consultarNotificaciones();
    this.interval = setInterval(() => {
      this.consultarNotificaciones();
    }, 4000);

  }

  consultarDispositivos() {
    return this.dispositivoService.consultarDispositivos()
      .snapshotChanges().subscribe(item => {
        this.dispositivoList = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.dispositivoList.push(x as Dispositivo);
        });
      });
  }

  consultarNotificaciones() {
    this.notificationService.consultarNotificaciones()
      .snapshotChanges().subscribe(item => {
        this.notificacionList = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.notificacionList.push(x as Notificacion);
        });
        this.eliminarNotificacionesExtra();
      });
  }

  autoMode() {
    let estado = 2;
    this.deshabilitado = !this.deshabilitado;

    if (this.deshabilitado === true ) {
      estado = 0;
    }
    this.consultarDispositivos();
      this.dispositivoList.forEach(x => {
        x.estado = estado;
        this.crearNotificacion(x);
        this.dispositivoService.actualizarDispositivo(x);
      });
    this.consultarDispositivos();
  }

  obtenerEstado(estado): string {
    switch (estado) {
      case 0: return 'apagado';
      case 1: return 'encendido';
      case 2: return 'puesto en automatico';
    }
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

  eliminarNotificacionesExtra() {
    this.notificacionList = this.notificacionList.reverse();
    this.notificacionList = this.notificacionList.slice(0, 3);
  }
}
