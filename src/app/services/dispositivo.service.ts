import { Dispositivo } from './../models/dispositivo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class DispositivoService {

    dispositivosList: AngularFireList<any>;
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
            estado: dispositivo.estado
        });
    }

    actualizarDispositivo(dispositivo: Dispositivo) {
        this.dispositivosList.update( dispositivo.$key, {
            nombre: dispositivo.nombre,
            descripcion: dispositivo.descripcion,
            puerto: dispositivo.puerto,
            estado: dispositivo.estado
        });
    }

    eliminarDispositivo($key: string) {
        this.dispositivosList.remove($key);
    }
}
