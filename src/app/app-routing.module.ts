import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServiciosComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
