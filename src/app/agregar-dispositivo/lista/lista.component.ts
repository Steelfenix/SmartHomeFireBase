import { Component, OnInit } from '@angular/core';
import { Dispositivo } from './../../models/dispositivo';
import { DispositivoService } from './../../services/dispositivo.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  dispositivoList: Dispositivo[];

  constructor(
    private productService: DispositivoService,
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

  onEdit(product: Dispositivo) {
    this.productService.selectDispositivo = Object.assign({}, product);
  }

  onDelete($key: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.productService.eliminarDispositivo($key);
    }
  }

}
