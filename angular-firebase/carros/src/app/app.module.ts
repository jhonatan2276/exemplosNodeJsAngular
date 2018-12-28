import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { ListaModule } from './cadastro/lista/lista.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { FormsModule } from '@angular/forms';


const config ={
  apiKey: "AIzaSyC8VPTV5bROLbkwWeH5gj5XJR1zHnYQrd8",
  authDomain: "lucas-aula.firebaseapp.com",
  databaseURL: "https://lucas-aula.firebaseio.com",
  projectId: "lucas-aula",
  storageBucket: "lucas-aula.appspot.com",
  messagingSenderId: "457357012293"
};

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    CadastroModule,//Colocar antes para registrar as rotas
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
