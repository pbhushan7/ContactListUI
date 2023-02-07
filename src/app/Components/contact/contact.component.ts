import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.GetAllContact().subscribe(data=>{
      this.contacts=data;
      console.log(this.contacts)
    });
  }
}
