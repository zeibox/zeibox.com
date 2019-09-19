import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  @Input() parrafo: any;

  h: number;
  bg: string;

  @Input() estilos: any;


  constructor() { }

  ngOnInit() {
    console.log(this.estilos);
    this.styles();
  }

  styles() {
        this.h = this.estilos[0];
        this.bg = this.estilos[1];
    }
}

