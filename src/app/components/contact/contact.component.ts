import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.message = this.fb.group({
      interest: [''],
      fullName: this.fb.group({
        name: ['', Validators.required ],
        lastName: ['']
      }),
      email: ['', [Validators.email, Validators.required] ],
      phone: [''],
      city: [''],
      textarea: ['', Validators.required],
      validateEmail: [''],
      active: [ true ],
      readed: [ false ],
      formSend: [ false ],
      blocked: [ false ]
       // Agrega formularios de tutores en un arreglo
    }, { updateOn: 'blur' });  // updateOn cambia la frecuencia en que se validan los inputs
  }


  onSubmit(){
    console.log(this.message.value);
    // this.contact.addContact(this.message.value);
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
