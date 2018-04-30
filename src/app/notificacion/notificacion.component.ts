import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {
  @Input() hora: string;
  @Input() fecha: string;
  @Input() estado: string;
  @Input() nombreDispositivo: string;

  constructor() { }

  ngOnInit() {
  }

}
