
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.css']
})
export class HowWeWorkComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    new WOW({live: false}).init();
  }

}
