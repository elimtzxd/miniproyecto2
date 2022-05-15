import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { TablaComponent } from './tabla/tabla.component';
import { VideoComponent } from './video/video.component';
import { VillanosComponent } from './villanos/villanos.component';
import { DomseguroPipe } from './domseguro.pipe';
import { ModalComponent } from './modal/modal.component';
import { UsuariosModule } from './usuarios/usuarios.module';
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    SearchComponent,
    UnheroeComponent,
    TablaComponent,
    VideoComponent,
    VillanosComponent,
    DomseguroPipe,
    ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
