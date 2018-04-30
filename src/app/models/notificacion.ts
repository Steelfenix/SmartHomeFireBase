export class Notificacion {
    $key: string;
    hora: string;
    fecha: string;
    estado: string;
    nombreDispositivo: string;

    constructor() {
        this.hora = '';
        this.fecha = '';
        this.estado = '';
        this.nombreDispositivo = '';
    }
}
