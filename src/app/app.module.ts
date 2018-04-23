import { DispositivoService } from './services/dispositivo.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

// Componentes
import { MenuComponent } from './menu/menu.component';
import { DispositivoComponent } from './dispositivo/dispositivo.component';
import { ElementosComponent } from './elementos/elementos.component';
import { AgregarDispositivoComponent } from './agregar-dispositivo/agregar-dispositivo.component';
import { FormularioComponent } from './agregar-dispositivo/formulario/formulario.component';
import { ListaComponent } from './agregar-dispositivo/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DispositivoComponent,
    ElementosComponent,
    AgregarDispositivoComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [DispositivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
