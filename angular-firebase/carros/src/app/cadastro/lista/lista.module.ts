import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { CrudComponent } from '../crud/crud.component';
import { ListaComponent } from './lista.component';
import { EditaComponent } from '../edita/edita.component';

@NgModule({
  imports: [
    CommonModule,
    ListaRoutingModule
  ],
  declarations: []
})
export class ListaModule { }
