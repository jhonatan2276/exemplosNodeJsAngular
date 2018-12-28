import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from '../crud/crud.component';
import { ListaComponent } from './lista.component';
import { EditaComponent } from '../edita/edita.component';

const routes: Routes = [
  {
    path:'lista',
    component:CrudComponent,
    children:[
      { path:'',component:ListaComponent },
      { path:'edita',component:EditaComponent}
    ]
  } 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaRoutingModule { }
