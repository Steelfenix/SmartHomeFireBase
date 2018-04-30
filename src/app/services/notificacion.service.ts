import { Notificacion } from './../models/notificacion';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class NotificacionService {

    notificacionesList: AngularFireList<any>;

    constructor(private firebase: AngularFireDatabase) { }

    consultarNotificaciones() {
        return this.notificacionesList = this.firebase.list('notificaciones');
    }

    agregarNotificacion(notificacion: Notificacion) {
        this.notificacionesList.push({
            hora: notificacion.hora,
            fecha: notificacion.fecha,
            estado: notificacion.estado,
            nombreDispositivo: notificacion.nombreDispositivo
        });
    }
}
