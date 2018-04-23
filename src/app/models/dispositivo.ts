export class Dispositivo {
    $key: string;
    nombre: string;
    descripcion: string;
    puerto: string;
    estado: boolean;

    constructor() {
        this.descripcion = '';
        this.estado = false;
        this.nombre = '';
        this.puerto = '';
    }
}
