import { Injectable } from '@angular/core';
import { Villano } from '../villano';
import { VILLANOS } from '../misvillanos';

@Injectable({
  providedIn: 'root'
})
export class VillanoService {
  private villanos:Villano[]=VILLANOS;
  constructor() { }
  getVillanos():Villano[]{
    return this.villanos;
  }
}
