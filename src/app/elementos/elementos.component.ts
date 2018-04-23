import { DispositivoService } from './../services/dispositivo.service';
import { Dispositivo } from './../models/dispositivo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css']
})
export class ElementosComponent implements OnInit {

  dispositivoList: Dispositivo[];

  constructor(
    private productService: DispositivoService
  ) { }

  ngOnInit() {
    return this.productService.consultarDispositivos()
      .snapshotChanges().subscribe(item => {
        this.dispositivoList = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.dispositivoList.push(x as Dispositivo);
        });
      });
  }

}
