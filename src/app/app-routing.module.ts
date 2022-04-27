import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'login', component:LoginComponent},
  { path:'registro', component:RegistroComponent},
  { path:'gestion', component:GestionComponent},
  { path:'sidebar', component:SidebarComponent},
  { path:'home', component:HomeComponent},
  { path:'categorias', component:CategoriasComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
