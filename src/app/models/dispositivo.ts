export class Dispositivo {
    $key: string;
    tipo: number;
    nombre: string;
    descripcion: string;
    puerto: string;
    estado: number;

    constructor() {
        this.tipo = 0;
        this.descripcion = '';
        this.estado = 0;
        this.nombre = '';
        this.puerto = '';
    }
}
