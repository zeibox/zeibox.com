import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = () => {
      const nav = document.querySelector('#navbar');
      if(window.scrollY <= 10){
        nav.className = 'navbar navbar-expand-md navbar-dark fixed-top';
      } else {
        nav.className = 'navbar navbar-expand-md navbar-dark fixed-top scroll';
      }
    };
  }

}
