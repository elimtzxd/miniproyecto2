import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios/usuario.model';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
  
export class TablaComponent implements OnInit {
  datos:Usuario []=[];

  constructor(private PonerUsuarios:UsuariosService) {
    this.datos=PonerUsuarios.getUsuarios();

   }

  ngOnInit(): void {
  }

}
