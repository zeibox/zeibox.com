import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  t1: any;
  fade: boolean;
  opciones = 'none';
  langEs: boolean;

  browserLang = this.translate.getBrowserLang();

  localLang: string;

  constructor(public translate: TranslateService, private router: Router) {

    translate.addLangs(['es', 'en']);
    // translate.setDefaultLang('es');
    // translate.use(this.browserLang.match(/es|en/) ? this.browserLang : 'es');
    // this.lang();
  }

  ngOnInit() {

    this.browserLang = this.translate.getBrowserLang();
    this.localLang = localStorage.getItem('LANG');
    this.checkLang();

    window.onscroll = () => {

      const nav = document.querySelector('#navbar');
      const cBN = document.querySelector('#contBotonesNav');
      const ariaExp = document.getElementById('toggleBtn').getAttribute('aria-expanded');
      if (window.innerWidth < 992) {
        if (ariaExp === 'false') {
          if ( window.scrollY <= 10 ) {
            nav.className = 'navbar navbarT fixed-top navbar-expand-lg p-0';
            cBN.className = 'container-fluid navWidth';
          } else {
            nav.className = 'navbar fixed-top navbar-expand-lg p-0';
            cBN.className = 'container-fluid navWidth scroll';
          }
        }
      } else {
        cBN.className = 'container-fluid navWidth';
        if ( window.scrollY <= 10 ) {
          nav.className = 'navbar navbarT fixed-top navbar-expand-lg p-0';
          cBN.className = 'container-fluid navWidth';
        } else {
          nav.className = 'navbar fixed-top navbar-expand-lg p-0';
          cBN.className = 'container-fluid navWidth scroll';
        }
      }
    };
  }

  onRes() {

    const ariaExp = document.getElementById('toggleBtn').getAttribute('aria-expanded');
    const cBN = document.querySelector('#contBotonesNav');

    if (window.innerWidth > 992) {
      if (window.scrollY <= 10) {
        cBN.className = 'container-fluid navWidth';
      }
    } else {
      if (window.innerWidth < 992) {
        if (ariaExp === 'true') {
          cBN.className = 'container-fluid navWidth scroll';
        } else {
          if (window.scrollY <= 10) {
            cBN.className = 'container-fluid navWidth';
          }
        }
      }
    }
  }

  toggleChangeColor() {

    const cBN = document.querySelector('#contBotonesNav');
    const ariaExp = document.getElementById('toggleBtn').getAttribute('aria-expanded');

    if (ariaExp === 'false') {
      cBN.className = 'container-fluid navWidth scroll';
    } else {
      if (window.scrollY <= 10) {
        cBN.className = 'container-fluid navWidth';
      }
    }
  }

  langChange() {
    if (this.langEs) {
      this.translate.use('en');
      this.setLocalLang('en');
      this.langEs = false;
    } else {
      this.translate.use('es');
      this.setLocalLang('es');
      this.langEs = true;
    }
  }

  checkLang() {
    if (this.localLang === null || undefined) {
      this.langEs = true;
      this.translate.use('es');
    } else {
      if (this.localLang === 'es') {
        // Setea el booleano que cambia el icono del navbar
        this.langEs = true;
        this.translate.use('es');
      } else {
        // Setea el booleano que cambia el icono del navbar
        this.langEs = false;
        this.translate.use('en');
      }
    }
  }

  setLocalLang(lang: string) {
    localStorage.setItem('LANG', lang);
  }

  getLang() {
    this.localLang = localStorage.getItem('LANG');
  }

  // Checkea si el usuario está en la misma pagina y vuelve al punto 0,0 en el Eje Y
  // si no se clickea el boton y no hace nada, parece que no funciona

  checkRouteHome() {
    if (this.router.url === '/home') {
      window.scrollTo(0, 0);
    }
  }
  checkRouteService() {
    if (this.router.url === '/services') {
      window.scrollTo(0, 0);
    }
  }
  checkRouteWeWork() {
    if (this.router.url === '/how-we-work') {
      window.scrollTo(0, 0);
    }
  }
  checkRouteWeAre() {
    if (this.router.url === '/who-we-are') {
      window.scrollTo(0, 0);
    }
  }


  

  // handleMenu() {
  //   const nav = document.querySelector('#navbar');
  //   const nav2 = document.querySelector('#navbar2');
  //   // const navt = document.querySelector('#toggle');
  //   const navti = document.querySelector('#toggleIcon');
  //   const navtext = document.querySelector('#navText');
  //   if( this.opciones === 'none') {
  //     this.opciones = 'inline';
  //     if ( window.scrollY <= 10 ) {
  //       nav.className = 'navbar navbarT fixed-top';
  //       nav2.className = 'navbar navbarT fixed-top';
  //       navti.className = 'navbar-toggler-icon white-icon';
  //       navtext.className = 'navbar-brand white';
  //     } else {
  //       nav.className = 'navbar fixed-top scroll shadow';
  //       nav2.className = 'navbar fixed-top scroll shadow';
  //       navti.className = 'navbar-toggler-icon red-icon';
  //       navtext.className = 'navbar-brand red';
  //     }
  //   } else {
  //     this.opciones = 'none';
  //     if ( window.scrollY <= 10 ) {
  //       nav.className = 'navbar navbarT fixed-top';
  //       nav2.className = 'navbar navbarT fixed-top';
  //       navti.className = 'navbar-toggler-icon white-icon';
  //       navtext.className = 'navbar-brand white';
  //     } else {
  //       nav.className = 'navbar fixed-top scroll shadow';
  //       nav2.className = 'navbar fixed-top scroll shadow';
  //       navti.className = 'navbar-toggler-icon red-icon';
  //       navtext.className = 'navbar-brand red';
  //     }
  //   }
  // }
}
