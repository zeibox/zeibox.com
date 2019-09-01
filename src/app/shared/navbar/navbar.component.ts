import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@HostListener('window:scroll', ['$event'])
export class NavbarComponent implements OnInit {
  t1: any;
  fade: boolean;
  opciones = 'none';
  langEs: boolean;
  browserLang = this.translate.getBrowserLang();

  constructor(public translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    translate.use(this.browserLang.match(/es|en/) ? this.browserLang : 'es');
    this.lang();
  }

  ngOnInit() {
    window.onscroll = () => {
      const nav = document.querySelector('#navbar');
      const nav2 = document.querySelector('#navbar2');
      // const navt = document.querySelector('#toggle');
      const navti = document.querySelector('#toggleIcon');
      const navtext = document.querySelector('#navText');
      // const navZei = document.querySelector('#navZeibox');
      if ( window.scrollY <= 10 ) {
        nav.className = 'navbar navbarT fixed-top';
        nav2.className = 'navbar navbarT fixed-top';
        // navt.className = 'navbar-toggler white-border';
        navti.className = 'navbar-toggler-icon white-icon';
        navtext.className = 'navbar-brand white';
        // navZei.className = 'navbar-brand white mr-auto zeiboxH';
      } else {
        nav.className = 'navbar fixed-top scroll shadow';
        nav2.className = 'navbar fixed-top scroll shadow';
        // navt.className = 'navbar-toggler red-border';
        navti.className = 'navbar-toggler-icon red-icon';
        navtext.className = 'navbar-brand red';
        // navZei.className = 'navbar-brand red mr-auto zeiboxH';
      }
    };
  }

  fadeMethod() {
    const menu = document.querySelector('#menu');
    this.fade = !this.fade;
    if (this.fade){
      this.fade = true;
      menu.className = 'animated fadeOut ml-auto pr-5';
    } else {
      this.fade = false;
      menu.className = 'animated fadeIn ml-auto pr-5';
    }
  }

  doSomething(event) {
    console.log('Scroll Event', window.pageYOffset );
  }

  langChange() {
    if (this.langEs) {
      this.translate.use('en');
      this.langEs = false;
    } else {
      this.translate.use('es');
      this.langEs = true;
    }
  }

  lang() {
    if (this.browserLang == 'es') {
      this.langEs = true;
    } else {
      this.langEs = false;
    }
  }

  timeout2() {
    this.t1 = setTimeout(() => {
      this.opciones = 'none';
    }, 1000);
  }


  handleMenu() {
    this.fadeMethod();
    const nav = document.querySelector('#navbar');
    const nav2 = document.querySelector('#navbar2');
    // const navt = document.querySelector('#toggle');
    const navti = document.querySelector('#toggleIcon');
    const navtext = document.querySelector('#navText');
    // const navZei = document.querySelector('#navZeibox');
    if( this.opciones === 'none') {
      this.opciones = 'inline';
      if ( window.scrollY <= 10 ) {
        nav.className = 'navbar navbarT fixed-top';
        nav2.className = 'navbar navbarT fixed-top';
        // navt.className = 'navbar-toggler white-border';
        navti.className = 'navbar-toggler-icon white-icon';
        navtext.className = 'navbar-brand white';
        // navZei.className = 'navbar-brand white mr-auto zeiboxH';
      } else {
        nav.className = 'navbar fixed-top scroll shadow';
        nav2.className = 'navbar fixed-top scroll shadow';
        // navt.className = 'navbar-toggler red-border';
        navti.className = 'navbar-toggler-icon red-icon';
        navtext.className = 'navbar-brand red';
        // navZei.className = 'navbar-brand red mr-auto zeiboxH';
      }
    } else {
      this.opciones = 'none';
      if ( window.scrollY <= 10 ) {
        nav.className = 'navbar navbarT fixed-top';
        nav2.className = 'navbar navbarT fixed-top';
        // navt.className = 'navbar-toggler white-border';
        navti.className = 'navbar-toggler-icon white-icon';
        navtext.className = 'navbar-brand white';
        // navZei.className = 'navbar-brand white mr-auto zeiboxH';
      } else {
        nav.className = 'navbar fixed-top scroll shadow';
        nav2.className = 'navbar fixed-top scroll shadow';
        // navt.className = 'navbar-toggler red-border';
        navti.className = 'navbar-toggler-icon red-icon';
        navtext.className = 'navbar-brand red';
        // navZei.className = 'navbar-brand red mr-auto zeiboxH';
      }
    }
  }
}
