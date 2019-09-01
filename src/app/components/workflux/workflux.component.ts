import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflux',
  templateUrl: './workflux.component.html',
  styleUrls: ['./workflux.component.css']
})
export class WorkfluxComponent implements OnInit {

  a1: string;
  b1: string;
  c1: string;

  a2: string;
  b2: string;
  c2: string;

  a3: string;
  b3: string;
  c3: string;

  a4: string;
  b4: string;
  c4: string;

  t1: any;
  t2: any;
  t3: any;
  t4: any;

  constructor() { }

  ngOnInit() {
    this.nule1();
    this.nule2();
    this.nule3();
    this.nule4();
    this.timeoutStart();
  }
// -------------------------------- Activa la Card onHover y Oculta la ultima tarjeta seleccionada
  checkPosition1() {
    this.clearTimeouts();
    if (this.c1 === 'overlay c') {
      this.active1();
      this.timeout2();
    } else if (this.c2 === 'overlay c') {
      this.nule2();
      this.active1();
      this.timeout2();
    } else if (this.c3 === 'overlay c') {
      this.nule3();
      this.active1();
      this.timeout2();
    } else {
      this.nule4();
      this.active1();
      this.timeout2();
    }
  }
  checkPosition2() {
    this.clearTimeouts();
    if (this.c1 === 'overlay c') {
      this.nule1();
      this.active2();
      this.timeout3();
    } else if (this.c2 === 'overlay c') {
      this.active2();
      this.timeout3();
    } else if (this.c3 === 'overlay c') {
      this.nule3();
      this.active2();
      this.timeout3();
    } else {
      this.nule4();
      this.active2();
      this.timeout3();
    }
  }
  checkPosition3() {
    this.clearTimeouts();
    if (this.c1 === 'overlay c') {
      this.nule1();
      this.active3();
      this.timeout4();
    } else if (this.c2 === 'overlay c') {
      this.nule2();
      this.active3();
      this.timeout4();
    } else if (this.c3 === 'overlay c') {
      this.active3();
      this.timeout4();
    } else {
      this.nule4();
      this.active3();
      this.timeout4();
    }
  }
  checkPosition4() {
    this.clearTimeouts();
    if (this.c1 === 'overlay c') {
      this.nule1();
      this.active4();
      this.timeout1();
    } else if (this.c2 === 'overlay c') {
      this.nule2();
      this.active4();
      this.timeout1();
    } else if (this.c3 === 'overlay c') {
      this.nule3();
      this.active4();
      this.timeout1();
    } else {
      this.active4();
      this.timeout1();
    }
  }

  timeoutStart() {
    this.t3 = setTimeout(() => {
      this.active1();
      this.timeout2();
    }, 3000);
  }

  timeout1() {
    this.clearTimeouts();
    this.t1 = setTimeout(() => {
      this.checkPosition1();
    }, 3000);
  }

  timeout2() {
    this.clearTimeouts();
    this.t2 = setTimeout(() => {
      this.checkPosition2();
    }, 3000);
  }

  timeout3() {
    this.clearTimeouts();
    this.t3 = setTimeout(() => {
      this.checkPosition3();
    }, 3000);
  }

  timeout4() {
    this.clearTimeouts();
    this.t4 = setTimeout(() => {
      this.checkPosition4();
    }, 3000);
  }

  active1() {
    this.a1 = 'card shadow test cardFull text-center zz a';
    this.b1 = 'overlay2 b';
    this.c1 = 'overlay c';
  }
  active2() {
    this.a2 = 'card shadow test cardFull text-center zz a';
    this.b2 = 'overlay2 b';
    this.c2 = 'overlay c';
  }
  active3() {
    this.a3 = 'card shadow test cardFull text-center zz a';
    this.b3 = 'overlay2 b';
    this.c3 = 'overlay c';
  }
  active4() {
    this.a4 = 'card shadow test cardFull text-center zz a';
    this.b4 = 'overlay2 b';
    this.c4 = 'overlay c';
  }
  nule1() {
    this.a1 = 'card shadow test cardFull text-center zz';
    this.b1 = 'overlay2';
    this.c1 = 'overlay';
  }
  nule2() {
    this.a2 = 'card shadow test cardFull text-center zz';
    this.b2 = 'overlay2';
    this.c2 = 'overlay';
  }
  nule3() {
    this.a3 = 'card shadow test cardFull text-center zz';
    this.b3 = 'overlay2';
    this.c3 = 'overlay';
  }
  nule4() {
    this.a4 = 'card shadow test cardFull text-center zz';
    this.b4 = 'overlay2';
    this.c4 = 'overlay';
  }

  clearTimeouts() {
    clearTimeout(this.t1);
    clearTimeout(this.t2);
    clearTimeout(this.t3);
    clearTimeout(this.t4);
  }

}
