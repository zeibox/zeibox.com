import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
@Component({
  selector: 'app-banner1',
  templateUrl: './banner1.component.html',
  styleUrls: ['./banner1.component.css']
})
export class Banner1Component implements AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new WOW().init();
  }
}
