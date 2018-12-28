import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { EditaComponent } from './edita/edita.component';

@NgModule({
  imports: [
    CommonModule,
    CadastroRoutingModule
  ],
  declarations: [CrudComponent, ListaComponent, EditaComponent]
})
export class CadastroModule { }
