import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})

export class AltaUsuarioComponent implements OnInit {
  usuario!: Usuario;
  constructor(private UsuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuario = this.UsuariosService.nuevoUsuario();
  }
  nuevoUsuario(): void {
    this.UsuariosService.agregarUsuario(this.usuario);
    this.usuario = this.UsuariosService.nuevoUsuario();
  }
}
