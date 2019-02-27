import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AtencionComponent } from './pages/atencion/atencion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutUsComponent},
  { path: "contactanos", component: AtencionComponent},
  { path: "reserva", component: HomeComponent },
  { path: "servicios", component: ServiciosComponent },
  { path: "", redirectTo: "/home", pathMatch:"full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routerModules = [ 
  HomeComponent, 
  AboutUsComponent, 
  AtencionComponent, 
  ServiciosComponent,
  NotFoundComponent
]