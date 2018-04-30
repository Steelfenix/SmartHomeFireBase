import { Dispositivo } from './../../models/dispositivo';
import { DispositivoService } from './../../services/dispositivo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipoDispositivo } from '../../models/tipo-dispositivo';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipoDispositivoList = [
    new TipoDispositivo(1, 'Foco'),
    new TipoDispositivo(2, 'Ventilador')
  ];

  validado = true;
  mensajeBoton = 'Agregar';

  constructor(private dispositivoService: DispositivoService) { }

  ngOnInit() {
    this.dispositivoService.consultarDispositivos();
    this.resetForm();
  }

  onSubmit(dispositivoForm: NgForm) {
    this.validado = this.validarForm(dispositivoForm);
    if (dispositivoForm.valid) {
      if (dispositivoForm.value.$key == null) {
        this.dispositivoService.agregarDispositivo(dispositivoForm.value);
      } else {
        this.dispositivoService.actualizarDispositivo(dispositivoForm.value);
      }
      this.resetForm(dispositivoForm);
    }
  }

  validarForm(dispositivoForm: NgForm): boolean {
    if (dispositivoForm.valid) {
      return true;
    } else {
      return false;
    }
  }

  resetForm(dispositivoForm?: NgForm) {
    if (dispositivoForm != null) {
      dispositivoForm.reset();
      this.dispositivoService.selectDispositivo = new Dispositivo();
      this.mensajeBoton = 'Agregar';
    }
  }
}
