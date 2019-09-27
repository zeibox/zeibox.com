import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  localLang: string;
  t1: any;
  fade: boolean;
  opciones = 'none';
  langEs: boolean;
  browserLang = this.translate.getBrowserLang();

  constructor(public translate: TranslateService, private router: Router) {
    translate.addLangs(['es', 'en']);
    // translate.setDefaultLang('es');
    translate.use(this.browserLang.match(/es|en/) ? this.browserLang : 'es');
    this.lang();
  }

  ngOnInit() {
    this.getLang();
    console.log(this.localLang);
    this.translate.use(this.localLang);
    // Inicializar la pagina en ingles ------->
    // this.translate.use('en');
    // this.langEs = false;
    window.onscroll = () => {
      const nav = document.querySelector('#navbar');
      const cBN = document.querySelector('#contBotonesNav');
      // const nav2 = document.querySelector('#navbar2');
      // const navt = document.querySelector('#toggle');
      // const navti = document.querySelector('#toggleIcon');
      // const navtext = document.querySelector('#navText');
      // const navZei = document.querySelector('#navZeibox');
      if ( window.scrollY <= 10 ) {
        nav.className = 'navbar navbarT fixed-top navbar-expand-lg p-0';
        cBN.className = 'container-fluid navWidth';
        // nav2.className = 'navbar navbarT fixed-top';
        // navt.className = 'navbar-toggler white-border';
        // navti.className = 'navbar-toggler-icon white-icon';
        // navtext.className = 'navbar-brand white';
        // navZei.className = 'navbar-brand white mr-auto zeiboxH';
      } else {
        nav.className = 'navbar fixed-top navbar-expand-lg p-0';
        cBN.className = 'container-fluid navWidth scroll';
        // nav2.className = 'navbar fixed-top scroll shadow';
        // navt.className = 'navbar-toggler red-border';
        // navti.className = 'navbar-toggler-icon red-icon';
        // navtext.className = 'navbar-brand red';
        // navZei.className = 'navbar-brand red mr-auto zeiboxH';
      }
    };
  }


  langChange() {
    this.getLang();
    if (this.langEs) {
      this.translate.use('en');
      this.saveLocal('en');
      this.langEs = false;
    } else {
      this.translate.use('es');
      this.saveLocal('es');
      this.langEs = true;
    }
  }

  lang() {
    if (this.browserLang === 'es') {
      this.langEs = true;
    } else {
      this.langEs = false;
    }
  }

  saveLocal(lang: string) {
    localStorage.setItem('LANG', lang);
  }

  getLang() {
    this.localLang = localStorage.getItem('LANG');
  }

  timeout2() {
    this.t1 = setTimeout(() => {
      this.opciones = 'none';
    }, 1000);
  }


  checkRouteHome() {
    if (this.router.url === '/home') {
      window.scrollTo(0, 0);
    }
  }
  checkRouteService() {
    if (this.router.url === '/service') {
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
