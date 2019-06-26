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
      if ( window.scrollY <= 10 ) {
        nav.className = 'navbar navbar-dark fixed-top';
      } else {
        nav.className = 'navbar navbar-dark fixed-top scroll';
      }
    };
  }

  handleMenu(){
    const nav = document.querySelector('#navbar');
    nav.className = 'navbar navbar-dark fixed-top scroll';
    if( this.opciones === 'none') {
      this.opciones = 'inline';
      nav.className = 'navbar navbar-dark fixed-top scroll';
    } else {
      this.opciones = 'none';
    }

  }

}
