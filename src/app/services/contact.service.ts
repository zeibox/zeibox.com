import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contactsCollection: AngularFirestoreCollection<any>;
  contacts: Observable<any[]>;


  myForm = this.fb.group({
    fullName: this.fb.group({
      name: [''],
      lastName: ['']
    }),
    email: [''],
    interest: [''],
    textarea: [''],
    active: [ true ],
    readed: [ false ],
    blocked: [ false ]
  });

  constructor( private readonly afs: AngularFirestore, private fb: FormBuilder ) {
    this.contactsCollection  = afs.collection<any>('contacts');
    this.contacts = this.contactsCollection.snapshotChanges().pipe(map(
      actions => actions.map( a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
  }



  getContacts() {
    return this.contacts = this.contactsCollection.snapshotChanges()
    .pipe( map( changes => {
      return changes.map(action => {
        const data = action.payload.doc.data();
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  updateContact(contact: any ) {
    return this.contactsCollection.doc(contact.id).update(contact);
  }

  deleteContact(id: string){
    return this.contactsCollection.doc(id).delete();
  }

  addContact(contact: any){
    return this.contactsCollection.add(contact);
  }
}
