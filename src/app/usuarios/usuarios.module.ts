import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './usuarios.service';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AltaUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],providers: [
    UsuariosService
  ],exports: [
    AltaUsuarioComponent
  ]
})
export class UsuariosModule { } 
