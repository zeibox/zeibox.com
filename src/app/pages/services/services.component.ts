import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    new WOW({live: false}).init();
  }
}
