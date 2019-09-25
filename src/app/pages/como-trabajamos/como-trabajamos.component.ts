import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-como-trabajamos',
  templateUrl: './como-trabajamos.component.html',
  styleUrls: ['./como-trabajamos.component.css']
})
export class ComoTrabajamosComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    new WOW({live: false}).init();
  }
}
