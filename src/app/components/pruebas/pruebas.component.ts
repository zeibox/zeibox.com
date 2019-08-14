import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  imagenes = {
    pedo: 'https://www.wolox.com.ar/assets/img-main-wwd-muzi-8ef9358128.png'
  };

  imagen: string[] = ['https://www.wolox.com.ar/assets/img-main-wwd-muzi-8ef9358128.png'];

  constructor() { }

  ngOnInit() {
  }

}
