import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ContactsService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message: FormGroup;
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public contactService: ContactsService, private fb: FormBuilder ) { }

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
    this.contactService.addContact(this.message.value);
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
