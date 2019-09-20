import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  imagen: string[] = [
    '../../../assets/img/home/tablet1.png',
    '../../../assets/img/home/mobile.png',
    '../../../assets/img/home/monitor.png'];

  textos: string[] = [
    'APLICACIONES MOVILES',
    'APLICACIONES WEB Y SOFTWARE EMPRESARIAL',
    'APLICACIONES MULTIPLATAFORMA'
  ];

  onPage = true;
  anim1: string;
  anim2: string;
  anim3: string;
  titulo: string;
  info: string;
  t1: any;
  t2: any;
  t3: any;

  constructor() { }

  ngOnInit() {
    this.anim1 = 'nule';
    this.anim2 = 'nule';
    this.anim3 = 'nule';
    this.start();
  }

// CAMBIADORES DE CLASES (que impactan en la animación)

  start() {
        this.anim1 = 'active';
        this.anim2 = 'nule';
        this.anim3 = 'nule';
        this.timeout1();
        // console.log('trigger btn1');
  }


  btn1() {
    this.clearTimeouts();
    if (this.anim2 === 'active') {
      this.anim1 = 'active';
      this.anim2 = 'hidden';
      this.anim3 = 'nule';
      this.timeout1();
    } else {
    this.anim1 = 'active';
    this.anim2 = 'nule';
    this.anim3 = 'hidden';
    this.timeout1(); }
  }

  btn2() {
    this.clearTimeouts();
    if (this.anim3 === 'active') {
      this.anim1 = 'nule';
      this.anim2 = 'active';
      this.anim3 = 'hidden';
      this.timeout2();
    } else {
    this.anim1 = 'hidden';
    this.anim2 = 'active';
    this.anim3 = 'nule';
    this.timeout2(); }
  }

  btn3() {
    this.clearTimeouts();
    if (this.anim1 === 'active') {
      this.anim1 = 'hidden';
      this.anim2 = 'nule';
      this.anim3 = 'active';
      this.timeout3();
    } else {
    this.anim1 = 'nule';
    this.anim2 = 'hidden';
    this.anim3 = 'active';
    this.timeout3(); }
  }

// BUTTON TRIGGERS
  triggerBtn1() {
    const boton1: HTMLElement = document.querySelector('#boton1') as HTMLElement;
    boton1.click();
  }
  triggerBtn2() {
    const boton2: HTMLElement = document.querySelector('#boton2') as HTMLElement;
    boton2.click();
  }
  triggerBtn3() {
    const boton3: HTMLElement = document.querySelector('#boton3') as HTMLElement;
    boton3.click();
  }

// TIMEOUTS, cada 6000 clickea el boton que ejecuta el metodo correspondiente
  timeout1() {
    this.t1 = setTimeout(() => {
        // console.log('trigger btn2');
        this.triggerBtn2();
    }, 6000);
  }
  timeout2() {
    this.t2 = setTimeout(() => {
        // console.log('trigger btn3');
        this.triggerBtn3();
    }, 6000);
  }
  timeout3() {
    this.t3 = setTimeout(() => {
        // console.log('trigger btn1');
        this.triggerBtn1();
    }, 6000);
  }

// CLEAR TIMEOUTS PARA QUE NO SE HAGA UN LOOP DE TIMEOUTS AL CLICKEAR
  clearTimeouts() {
    clearTimeout(this.t1);
    clearTimeout(this.t2);
    clearTimeout(this.t3);
  }

}
