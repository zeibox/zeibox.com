import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { SliderComponent } from './components/slider/slider.component';
import { WorkfluxComponent } from './components/workflux/workflux.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { Banner1Component } from './components/banner1/banner1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    SliderComponent,
    WorkfluxComponent,
    FooterComponent,
    ContactComponent,
    BannerComponent,
    Banner1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
