import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    new WOW({live: false}).init();
  }

}
