import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  toggle = false;
  menu = true;
  mensajeBoton = 'Agregar / Editar';

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.toggle = !this.toggle;
  }

  onCambioMenu() {
    this.menu = !this.menu;
    if (this.menu) {
      this.mensajeBoton = 'Agregar / Editar';
    } else {
      this.mensajeBoton = 'Dispositivos';
    }
  }

}
