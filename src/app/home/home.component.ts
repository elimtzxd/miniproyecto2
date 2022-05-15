import { Component, EventEmitter, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalSwitch: boolean = false;

  constructor(private modalSS:SwitchService) { 

  }

  ngOnInit(): void {
    this.modalSS.$modal.suscribe((valor: boolean) => (this.modalSwitch = valor))
  }
  openModal(){
    this.modalSwitch=true;
  }

}
