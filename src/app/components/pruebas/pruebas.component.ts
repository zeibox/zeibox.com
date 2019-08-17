import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  imagen: string[] = [
    'https://www.wolox.com.ar/assets/img-main-wwd-muzi-8ef9358128.png',
    'https://www.wolox.com.ar/assets/img-main-wwd-greenco-dd1eff9fd0.png',
    'https://www.wolox.com.ar/assets/img-main-wwd-prime-b6b14a09fd.png'];

  constructor() { }

  ngOnInit() {
  }

}
