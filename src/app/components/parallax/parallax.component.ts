import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  @Input() parrafo: any;
  @Input() estilos: any;

  h: number;
  bg: string;
  filtro: string;

  constructor() { }

  ngOnInit() {
    console.log(this.estilos);
    this.styles();
  }

  styles() {
        this.h = this.estilos[0];
        this.bg = this.estilos[1];
        this.filtro = this.estilos[2];
    }

    asignarEstilos() {
      const styles = {
        'height.px': this.h,
        background: 'url(' + this.bg + ') no-repeat center center',
        'background-size': 'cover',
        position: 'relative',
        'background-position': 'center',
        'background-attachment': 'fixed',
      };
      return styles;
    }

    asignarOpacidad() {
      const styles = {
        'background-color': this.filtro,
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
      };
      return styles;
    }
}

