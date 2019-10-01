import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


import { HowWeWorkComponent } from './pages/how-we-work/how-we-work.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'how-we-work', component: HowWeWorkComponent },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'services', component: ServicesComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
