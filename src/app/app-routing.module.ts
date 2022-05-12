import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { TablaComponent } from './tabla/tabla.component';
import { VideoComponent } from './video/video.component';
import { VillanosComponent } from './villanos/villanos.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'heroes',component:HeroesComponent},
  {path:'about',component:AboutComponent},
  {path:'tabla',component:TablaComponent},
  {path:'video',component:VideoComponent},
  {path:'villanos',component:VillanosComponent},



  {path: 'heroe/:id',component:UnheroeComponent},
  {path: 'buscador/:nombreh',component:SearchComponent},
  {path: '**',pathMatch:'full',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
