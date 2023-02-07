import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/Contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  addContactRequest: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    number: ''
  };
  constructor(private contactService: ContactsService , private router: Router) { }

  ngOnInit(): void {
  }

  addContact()
    {
      this.contactService.AddContact(this.addContactRequest)
      .subscribe({
        next: (contact) => {
          console.log(contact);
          this.router.navigate(['contacts']);
        }
        // this.router.navigate(['contacts']);
      });
    }

}

