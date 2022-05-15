import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { FECHA } from './fecha';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private usuarios: Usuario[] = [];
  //private fecha: fecha[] = FECHA;//

  constructor() {
    this.usuarios = JSON.parse (localStorage.getItem("data")|| '[]');
  }

  getUsuarios() {
    return this.usuarios;
  }
  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
    localStorage.setItem("data",JSON.stringify(this.usuarios));
  }

  nuevoUsuario(): Usuario {
    return {
      nombre: '',
      correo: '',
      sexo: '',
      fec_nac: Date
    };
  }
}
