import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message: FormGroup;
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.message = this.fb.group({
      fullName: this.fb.group({
        name: ['', Validators.required ],
        lastName: ['']
      }),
      email: ['', [Validators.email, Validators.pattern(this.emailPattern)] ],
      interest: [''],
      textarea: ['', Validators.required],
      active: [ true ],
      readed: [ false ],
      blocked: [ false ]
    }, { updateOn: 'blur' });  // updateOn cambia la frecuencia en que se validan los inputs
  }


  onSubmit() {
    // this.contactForm.addContact(this.message.value);
    console.log(this.message.value);
    this.message.reset( {
      interest: "",
      fullName: {
        name: "",
        lastName: "",
      },
      email: "",
      phone: "",
      city: "",
      textarea: ""
    });
  }


}
