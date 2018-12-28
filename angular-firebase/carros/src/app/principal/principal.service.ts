import { FirebaseService } from '../firebase.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { CollectionReference } from '@firebase/firestore-types';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private path: string = 'carros';
  

  constructor(public firebaseService: FirebaseService ) {
    
  }
  
  list() {
    return this.firebaseService.getList(this.path);
  }

  get(id) {
    return this.firebaseService.getObject(`${this.path}/${id}`);
  }
  add(doc) {
    return this.firebaseService.addItem(this.path, doc);
  }
  update(id, doc) {
    return this.firebaseService.updateItem(`${this.path}/${id}`, doc);
  }
  remove(id) {
    return this.firebaseService.removeItem(this.path, id);
  }

}