import { Notificacion } from './../models/notificacion';
import { Dispositivo } from './../models/dispositivo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class DispositivoService {

    dispositivosList: AngularFireList<any>;
    notificacionesList: AngularFireList<any>;

    public selectDispositivo: Dispositivo = new Dispositivo();

    constructor(private firebase: AngularFireDatabase) { }

    consultarDispositivos() {
        return this.dispositivosList = this.firebase.list('dispositivos');
    }

    agregarDispositivo(dispositivo: Dispositivo) {
        this.dispositivosList.push({
            nombre: dispositivo.nombre,
            descripcion: dispositivo.descripcion,
            puerto: dispositivo.puerto,
            estado: dispositivo.estado,
            tipo: dispositivo.tipo
        });
    }

    actualizarDispositivo(dispositivo: Dispositivo) {
        this.dispositivosList.update( dispositivo.$key, {
            nombre: dispositivo.nombre,
            descripcion: dispositivo.descripcion,
            puerto: dispositivo.puerto,
            estado: dispositivo.estado,
            tipo: dispositivo.tipo
        });
    }

    eliminarDispositivo($key: string) {
        this.dispositivosList.remove($key);
    }

    consultarNotificaciones() {
        return this.notificacionesList = this.firebase.list('notificaciones');
    }

    agregarNotificacion(notificacion: Notificacion) {
        this.notificacionesList.push({
            hora: notificacion.hora,
            estado: notificacion.estado,
            nombreDispositivo: notificacion.nombreDispositivo
        });
    }
}
