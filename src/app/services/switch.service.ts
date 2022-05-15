import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  $modal: any;

  constructor() { 
    this.$modal =new EventEmitter<any>();
  }
}
