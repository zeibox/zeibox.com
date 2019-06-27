import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  opciones = 'none';
  constructor() { }

  ngOnInit() {

    window.onscroll = () => {
      const nav = document.querySelector('#navbar');
      const nav2 = document.querySelector('#navbar2');
      const navt = document.querySelector('#toggle');
      const navti = document.querySelector('#toggleIcon');
      const navtext = document.querySelector('#navText');
      if ( window.scrollY <= 10 ) {
        nav.className = 'navbar navbarT fixed-top';
        nav2.className = 'navbar navbarT fixed-top';
        navt.className = 'navbar-toggler white-border';
        navti.className = 'navbar-toggler-icon white-icon';
        navtext.className = 'navbar-brand white';
      } else {
        nav.className = 'navbar fixed-top scroll shadow';
        nav2.className = 'navbar fixed-top scroll shadow';
        navt.className = 'navbar-toggler red-border';
        navti.className = 'navbar-toggler-icon red-icon';
        navtext.className = 'navbar-brand red';
      }
    };
  }

  handleMenu() {
    const nav = document.querySelector('#navbar');
    const nav2 = document.querySelector('#navbar2');
    const navt = document.querySelector('#toggle');
    const navti = document.querySelector('#toggleIcon');
    const navtext = document.querySelector('#navText');
    if( this.opciones === 'none') {
      this.opciones = 'inline';
      if ( window.scrollY <= 10 ) {
        nav.className = 'navbar navbarT fixed-top';
        nav2.className = 'navbar navbarT fixed-top';
        navt.className = 'navbar-toggler white-border';
        navti.className = 'navbar-toggler-icon white-icon';
        navtext.className = 'navbar-brand white';
      } else {
        nav.className = 'navbar fixed-top scroll shadow';
        nav2.className = 'navbar fixed-top scroll shadow';
        navt.className = 'navbar-toggler red-border';
        navti.className = 'navbar-toggler-icon red-icon';
        navtext.className = 'navbar-brand red';
      }
    } else {
      this.opciones = 'none';
      if ( window.scrollY <= 10 ) {
        nav.className = 'navbar navbarT fixed-top';
        nav2.className = 'navbar navbarT fixed-top';
        navt.className = 'navbar-toggler white-border';
        navti.className = 'navbar-toggler-icon white-icon';
        navtext.className = 'navbar-brand white';
      } else {
        nav.className = 'navbar fixed-top scroll shadow';
        nav2.className = 'navbar fixed-top scroll shadow';
        navt.className = 'navbar-toggler red-border';
        navti.className = 'navbar-toggler-icon red-icon';
        navtext.className = 'navbar-brand red';
      }
    }
  }




}
