import { Dispositivo } from './../models/dispositivo';
import { DispositivoService } from './../services/dispositivo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-dispositivo',
  templateUrl: './agregar-dispositivo.component.html',
  styleUrls: ['./agregar-dispositivo.component.css']
})
export class AgregarDispositivoComponent implements OnInit {

  constructor(private dispositivoService: DispositivoService) { }

  ngOnInit() {
    this.dispositivoService.consultarDispositivos();
    this.resetForm();
  }

  onSubmit(dispositivoForm: NgForm) {
    if (dispositivoForm.value.$key == null) {
      this.dispositivoService.agregarDispositivo(dispositivoForm.value);
    } else {
      this.dispositivoService.actualizarDispositivo(dispositivoForm.value);
    }
    this.resetForm(dispositivoForm);
  }

  resetForm(dispositivoForm?: NgForm) {
    if (dispositivoForm != null) {
      dispositivoForm.reset();
      this.dispositivoService.selectDispositivo = new Dispositivo();
    }
  }

}
