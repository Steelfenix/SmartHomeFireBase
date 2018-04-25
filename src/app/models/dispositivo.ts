export class Dispositivo {
    $key: string;
    tipo: number;
    nombre: string;
    descripcion: string;
    puerto: string;
    estado: boolean;

    constructor() {
        this.tipo = 0;
        this.descripcion = '';
        this.estado = false;
        this.nombre = '';
        this.puerto = '';
    }
}
