import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { WorkfluxComponent } from './components/workflux/workflux.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './shared/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { Banner1Component } from './components/banner1/banner1.component';
import { ParallaxComponent } from './components/parallax/parallax.component';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { PruebasComponent } from './components/pruebas/pruebas.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { ServicesComponent } from './pages/services/services.component';
import { HowWeWorkComponent } from './pages/how-we-work/how-we-work.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';

import { NgwWowModule } from 'ngx-wow';


// NGX-TRANSLATE
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { HttpClientModule, HttpClient } from '@angular/common/http';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    WorkfluxComponent,
    FooterComponent,
    ContactComponent,
    BannerComponent,
    Banner1Component,
    PruebasComponent,
    WhoWeAreComponent,
    ServicesComponent,
    HowWeWorkComponent,
    CoverPageComponent,
    ParallaxComponent
  ],
  exports: [
    TranslateModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ContactComponent]
})
export class AppModule { }
